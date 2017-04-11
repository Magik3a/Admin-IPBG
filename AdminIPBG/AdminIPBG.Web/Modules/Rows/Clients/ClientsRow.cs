
namespace AdminIPBG.Rows.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Clients"), InstanceName("Clients"), TwoLevelCached]
    [ReadPermission("Rows:Clients:Read")]
    [InsertPermission("Rows:Clients:Insert")]
    [UpdatePermission("Rows:Clients:Update")]
    [DeletePermission("Rows:Clients:Delete")]
    [LookupScript("Rows.Clients")]
    public sealed class ClientsRow : Row, IIdRow, INameRow
    {        
            #region Clients Id
            [DisplayName("Clients Id"), Identity]
            public Int32? ClientsId { get { return Fields.ClientsId[this]; } set { Fields.ClientsId[this] = value; } }
            public partial class RowFields { public Int32Field ClientsId; }
            #endregion ClientsId
                
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
    get { return Fields.ClientsId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Name; }
            }
            #endregion Id and Name fields

    #region Constructor
    public ClientsRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Clients]")
    {
    LocalTextPrefix = "Rows.Clients";
    }
    }
    #endregion RowFields
    }
    }
