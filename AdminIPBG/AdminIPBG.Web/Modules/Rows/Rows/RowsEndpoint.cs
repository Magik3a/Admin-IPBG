
using System;
using System.Collections.Generic;
using System.IO;
using AdminIPBG.Rows.Entities;
using OfficeOpenXml;
using Serenity.Reporting;
using Serenity.Web;

namespace AdminIPBG.Rows.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.RowsRepository;
    using MyRow = Entities.RowsRow;

    [RoutePrefix("Services/Rows/Rows"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class RowsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var proj = ProjectorsRow.Fields;
            var phas = PhasesRow.Fields;
            var clie = ClientsRow.Fields;
            var part = PartsRow.Fields;

            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();

            var worksheet = ep.Workbook.Worksheets[1];
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    var rowReaded = new RowsRow();

                    rowReaded.TrackWithChecks = false;
                  
                    var projectorName = Convert.ToString(worksheet.Cells[row, 7].Value ?? "");
                    if (!string.IsNullOrWhiteSpace(projectorName))
                    {
                        var project = uow.Connection.TryFirst<ProjectorsRow>(q => q
                            .Select(proj.ProjectorId)
                            .Where(proj.Name == projectorName));

                        if (project == null)
                        {
                            project = new ProjectorsRow
                            {
                                Name = projectorName
                            };
                            var phaseId = Convert.ToInt32(uow.Connection.InsertAndGetID(project));
                            rowReaded.ProjectorId = phaseId;

                        }
                        else
                        {
                            rowReaded.ProjectorId = project.ProjectorId.Value;
                        }

                    }
                    else
                    {
                        response.ErrorList.Add("Error On Row " + row + "Projector Name can't be empty");
                        continue;
                    }

                    var phaseName = Convert.ToString(worksheet.Cells[row, 10].Value ?? "");
                    if (!string.IsNullOrWhiteSpace(phaseName))
                    {
                        var phase = uow.Connection.TryFirst<PhasesRow>(q => q
                            .Select(phas.PhaseId)
                            .Where(phas.Name == phaseName));

                        if (phase == null)
                        {
                            phase = new PhasesRow
                            {
                                Name = phaseName
                            };
                            var phaseId = Convert.ToInt32(uow.Connection.InsertAndGetID(phase));
                            rowReaded.PhaseId = phaseId;

                        }
                        else
                        {
                            rowReaded.PhaseId = phase.PhaseId.Value;
                        }

                    }
                    else
                    {
                        response.ErrorList.Add("Error On Row " + row + "Phase Name can't be empty");
                        continue;
                    }


                    var clientName = Convert.ToString(worksheet.Cells[row, 2].Value ?? "");
                    if (!string.IsNullOrWhiteSpace(clientName))
                    {
                        var client = uow.Connection.TryFirst<ClientsRow>(q => q
                            .Select(clie.ClientsId)
                            .Where(clie.Name == clientName));

                        if (client == null)
                        {
                            client = new ClientsRow
                            {
                                Name = clientName
                            };
                            var clientId = Convert.ToInt32(uow.Connection.InsertAndGetID(client));
                            rowReaded.ClientId = clientId;
                        }
                        else
                        {
                            rowReaded.ClientId = client.ClientsId.Value;
                        }
                    }
                    else
                    {
                        response.ErrorList.Add("Error On Row " + row + "Client Name can't be empty");
                        continue;
                    }


                    var partName = Convert.ToString(worksheet.Cells[row, 9].Value ?? "");
                    if (!string.IsNullOrWhiteSpace(partName))
                    {
                        var parts = uow.Connection.TryFirst<PartsRow>(q => q
                            .Select(part.PartId)
                            .Where(part.Name == partName));

                        if (parts == null)
                        {
                            parts = new PartsRow()
                            {
                                Name = partName
                            };
                            var partId = Convert.ToInt32(uow.Connection.InsertAndGetID(parts));
                            rowReaded.PartId = partId;
                        }
                        else
                        {
                            rowReaded.PartId = parts.PartId.Value;
                        }
                    }
                    else
                    {
                        response.ErrorList.Add("Error On Row " + row + "Part Name can't be empty");
                        continue;
                    }

                    rowReaded.ClassifierNumber = Convert.ToInt16(worksheet.Cells[row, 3].Value ?? 0);
                    rowReaded.Number = Convert.ToInt16(worksheet.Cells[row, 4].Value ?? 0);
                    rowReaded.Object = Convert.ToString(worksheet.Cells[row, 5].Value ?? "");
                    rowReaded.SubObject = Convert.ToString(worksheet.Cells[row, 6].Value ?? "");
                    rowReaded.Date = DateTime.Parse(worksheet.Cells[row, 8].Value.ToString(), System.Globalization.CultureInfo.CreateSpecificCulture("bg-BG"));

                    if (rowReaded.RowId == null)
                    {
                        new MyRepository().Create(uow, new SaveRequest<MyRow>
                        {
                            Entity = rowReaded
                        });

                        response.Inserted = response.Inserted + 1;
                    }
                    else
                    {
                        new MyRepository().Update(uow, new SaveRequest<MyRow>
                        {
                            Entity = rowReaded,
                            EntityId = rowReaded.RowId.Value
                        });

                        response.Updated = response.Updated + 1;
                    }
                }
                catch (Exception ex)
                {
                    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                }
            }

            return response;
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.RowsColumns));
            var bytes = new ReportRepository().Render(report);
            var reportName = "rows_";
            return ExcelContentResult.Create(bytes, reportName + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
