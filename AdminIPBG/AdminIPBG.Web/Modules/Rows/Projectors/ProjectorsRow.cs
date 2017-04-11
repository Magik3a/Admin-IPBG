
namespace AdminIPBG.Rows.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Projectors"), InstanceName("Projectors"), TwoLevelCached]
    [ReadPermission("Rows:Projectors:Read")]
    [InsertPermission("Rows:Projectors:Insert")]
    [UpdatePermission("Rows:Projectors:Update")]
    [DeletePermission("Rows:Projectors:Delete")]
    [LookupScript("Rows.Projectors")]
    public sealed class ProjectorsRow : Row, IIdRow, INameRow
    {        
            #region Projector Id
            [DisplayName("Projector Id"), Identity]
            public Int32? ProjectorId { get { return Fields.ProjectorId[this]; } set { Fields.ProjectorId[this] = value; } }
            public partial class RowFields { public Int32Field ProjectorId; }
            #endregion ProjectorId
                
            #region Name
            [DisplayName("Name"), Size(150), NotNull, QuickSearch]
            public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
            public partial class RowFields { public StringField Name; }
            #endregion Name
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.ProjectorId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Name; }
            }
            #endregion Id and Name fields

    #region Constructor
    public ProjectorsRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Projectors]")
    {
    LocalTextPrefix = "Rows.Projectors";
    }
    }
    #endregion RowFields
    }
    }
