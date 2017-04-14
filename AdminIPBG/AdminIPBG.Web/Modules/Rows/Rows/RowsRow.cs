
namespace AdminIPBG.Rows.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Rows"), InstanceName("Rows"), TwoLevelCached]
    [ReadPermission("Rows:Rows:Read")]
    [InsertPermission("Rows:Rows:Insert")]
    [UpdatePermission("Rows:Rows:Update")]
    [DeletePermission("Rows:Rows:Delete")]
    [LookupScript("Rows.Rows")]
    public sealed class RowsRow : Row, IIdRow, INameRow
    {
        #region Row Id
        [DisplayName("Row Id"), Identity]
        public Int32? RowId { get { return Fields.RowId[this]; } set { Fields.RowId[this] = value; } }
        public partial class RowFields { public Int32Field RowId; }
        #endregion RowId

        #region Client
        [DisplayName("Client"), NotNull, ForeignKey("[dbo].[Clients]", "ClientsId"), LeftJoin("jClient"), TextualField("ClientName")]
        [LookupEditor(typeof(Rows.Entities.ClientsRow), InplaceAdd = true)]
        public Int32? ClientId { get { return Fields.ClientId[this]; } set { Fields.ClientId[this] = value; } }
        

        public partial class RowFields { public Int32Field ClientId; }
        #endregion ClientId

        #region Classifier Number
        [DisplayName("Classifier Number"), NotNull]
        public Int32? ClassifierNumber { get { return Fields.ClassifierNumber[this]; } set { Fields.ClassifierNumber[this] = value; } }
        public partial class RowFields { public Int32Field ClassifierNumber; }
        #endregion ClassifierNumber

        #region Number
        [DisplayName("Number"), NotNull]
        public Int32? Number { get { return Fields.Number[this]; } set { Fields.Number[this] = value; } }
        public partial class RowFields { public Int32Field Number; }
        #endregion Number

        #region Object
        [DisplayName("Object"), Size(500), NotNull, QuickSearch]
        public String Object { get { return Fields.Object[this]; } set { Fields.Object[this] = value; } }
        public partial class RowFields { public StringField Object; }
        #endregion Object

        #region Sub Object
        [DisplayName("Sub Object"), Size(500)]
        public String SubObject { get { return Fields.SubObject[this]; } set { Fields.SubObject[this] = value; } }
        public partial class RowFields { public StringField SubObject; }
        #endregion SubObject

        #region Projector
        [DisplayName("Projector"), NotNull, ForeignKey("[dbo].[Projectors]", "ProjectorId"), LeftJoin("jProjector"), TextualField("ProjectorName")]
        [LookupEditor(typeof(Rows.Entities.ProjectorsRow), InplaceAdd = true)]
        public Int32? ProjectorId { get { return Fields.ProjectorId[this]; } set { Fields.ProjectorId[this] = value; } }
        public partial class RowFields { public Int32Field ProjectorId; }
        #endregion ProjectorId

        #region Date
        [DisplayName("Date"), NotNull]
        public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
        public partial class RowFields { public DateTimeField Date; }
        #endregion Date

        #region MyRegion
        [DisplayName("InvoiceCode"), QuickSearch]
        public String InvoiceCode
        {
            get { return Fields.InvoiceCode[this]; }
            set { Fields.InvoiceCode[this] = value; }
        }
        public partial class RowFields { public StringField InvoiceCode; }
        
        #endregion
        #region Part
        [DisplayName("Part"), NotNull, ForeignKey("[dbo].[Parts]", "PartId"), LeftJoin("jPart"), TextualField("PartName")]
        [LookupEditor(typeof(Rows.Entities.PartsRow), InplaceAdd = true)]
        public Int32? PartId { get { return Fields.PartId[this]; } set { Fields.PartId[this] = value; } }
        public partial class RowFields { public Int32Field PartId; }
        #endregion PartId

        #region Phase
        [DisplayName("Phase"), NotNull, ForeignKey("[dbo].[Phases]", "PhaseId"), LeftJoin("jPhase"), TextualField("PhaseName")]
        [LookupEditor(typeof(Rows.Entities.PhasesRow), InplaceAdd = true)]
        public Int32? PhaseId { get { return Fields.PhaseId[this]; } set { Fields.PhaseId[this] = value; } }
        public partial class RowFields { public Int32Field PhaseId; }
        #endregion PhaseId

        #region PersonDelivered

        [DisplayName("Person Delivered"), MaxLength(200), QuickSearch]
        public String PersonDelivered
        {
            get { return Fields.PersonDelivered[this]; }
            set { Fields.PersonDelivered[this] = value; }
        }
        public partial class RowFields { public StringField PersonDelivered; }
        #endregion

        #region PersonTook

        [DisplayName("Person Took"), MaxLength(200), QuickSearch]
        public String PersonTook
        {
            get { return Fields.PersonTook[this]; }
            set { Fields.PersonTook[this] = value; }
        }
        public partial class RowFields { public StringField PersonTook; }
        #endregion
        #region Foreign Fields

        [DisplayName("Client Name"), Expression("jClient.[Name]")]
        public String ClientName { get { return Fields.ClientName[this]; } set { Fields.ClientName[this] = value; } }
        public partial class RowFields { public StringField ClientName; }


        [DisplayName("Projector Name"), Expression("jProjector.[Name]")]
        public String ProjectorName { get { return Fields.ProjectorName[this]; } set { Fields.ProjectorName[this] = value; } }
        public partial class RowFields { public StringField ProjectorName; }


        [DisplayName("Part Name"), Expression("jPart.[Name]")]
        public String PartName { get { return Fields.PartName[this]; } set { Fields.PartName[this] = value; } }
        public partial class RowFields { public StringField PartName; }


        [DisplayName("Phase Name"), Expression("jPhase.[Name]")]
        public String PhaseName { get { return Fields.PhaseName[this]; } set { Fields.PhaseName[this] = value; } }
        public partial class RowFields { public StringField PhaseName; }


        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
        {
            get { return Fields.RowId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Object; }
        }
        #endregion Id and Name fields

        #region Constructor
        public RowsRow()
        : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
            : base("[dbo].[Rows]")
            {
                LocalTextPrefix = "Rows.Rows";
            }
        }
        #endregion RowFields
    }
}
