
namespace AdminIPBG.Rows.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Phases"), InstanceName("Phases"), TwoLevelCached]
    [ReadPermission("Rows:Phases:Read")]
    [InsertPermission("Rows:Phases:Insert")]
    [UpdatePermission("Rows:Phases:Update")]
    [DeletePermission("Rows:Phases:Delete")]
    [LookupScript("Rows.Phases")]
    public sealed class PhasesRow : Row, IIdRow, INameRow
    {        
            #region Phase Id
            [DisplayName("Phase Id"), Identity]
            public Int32? PhaseId { get { return Fields.PhaseId[this]; } set { Fields.PhaseId[this] = value; } }
            public partial class RowFields { public Int32Field PhaseId; }
            #endregion PhaseId
                
            #region Name
            [DisplayName("Name"), Size(100), NotNull, QuickSearch]
            public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
            public partial class RowFields { public StringField Name; }
            #endregion Name
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.PhaseId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Name; }
            }
            #endregion Id and Name fields

    #region Constructor
    public PhasesRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Phases]")
    {
    LocalTextPrefix = "Rows.Phases";
    }
    }
    #endregion RowFields
    }
    }
