
namespace AdminIPBG.Rows.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Parts"), InstanceName("Parts"), TwoLevelCached]
    [ReadPermission("Rows:Parts:Read")]
    [InsertPermission("Rows:Parts:Insert")]
    [UpdatePermission("Rows:Parts:Update")]
    [DeletePermission("Rows:Parts:Delete")]
    [LookupScript("Rows.Parts")]
    public sealed class PartsRow : Row, IIdRow, INameRow
    {        
            #region Part Id
            [DisplayName("Part Id"), Identity]
            public Int32? PartId { get { return Fields.PartId[this]; } set { Fields.PartId[this] = value; } }
            public partial class RowFields { public Int32Field PartId; }
            #endregion PartId
                
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
    get { return Fields.PartId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Name; }
            }
            #endregion Id and Name fields

    #region Constructor
    public PartsRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Parts]")
    {
    LocalTextPrefix = "Rows.Parts";
    }
    }
    #endregion RowFields
    }
    }
