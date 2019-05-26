
namespace AdminIPBG.Rows.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Row Details"), InstanceName("Row Details"), TwoLevelCached]
    [ReadPermission("Rows:RowDetails:Read")]
    [InsertPermission("Rows:RowDetails:Insert")]
    [UpdatePermission("Rows:RowDetails:Update")]
    [DeletePermission("Rows:RowDetails:Delete")]
    [LookupScript("Rows.RowDetails")]
    public sealed class RowDetailsRow : Row, IIdRow, INameRow
    {
        #region Row Detail Id
        [DisplayName("Row Detail Id"), Identity]
        public Int32? RowDetailId { get { return Fields.RowDetailId[this]; } set { Fields.RowDetailId[this] = value; } }
        public partial class RowFields { public Int32Field RowDetailId; }
        #endregion RowDetailId

        #region Description
        [DisplayName("Description"), Size(500), NotNull, QuickSearch]
        public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
        public partial class RowFields { public StringField Description; }
        #endregion Description

        #region Quantity
        [DisplayName("Quantity"), NotNull]
        public Int32? Quantity { get { return Fields.Quantity[this]; } set { Fields.Quantity[this] = value; } }
        public partial class RowFields { public Int32Field Quantity; }
        #endregion Quantity

        #region Phase
        [DisplayName("Part"), ForeignKey("[dbo].[Parts]", "PartId"), LeftJoin("jPart"), TextualField("PartName"), NotNull]
        [LookupEditor(typeof(Rows.Entities.PartsRow))]
        public Int32? PartId { get { return Fields.PartId[this]; } set { Fields.PartId[this] = value; } }
        public partial class RowFields { public Int32Field PartId; }
        #endregion Phase

        #region Row
        [DisplayName("Row"), ForeignKey("[dbo].[Rows]", "RowId"), LeftJoin("jRow"), TextualField("Object")]
        [LookupEditor(typeof(Rows.Entities.PhasesRow), InplaceAdd = true)]
        public Int32? RowId { get { return Fields.RowId[this]; } set { Fields.RowId[this] = value; } }
        public partial class RowFields { public Int32Field RowId; }
        #endregion Row


        #region Foreign Fields

        [DisplayName("Part Name"), Expression("jPart.[Name]"), MinSelectLevel(SelectLevel.List)]
        public String PartName { get { return Fields.PartName[this]; } set { Fields.PartName[this] = value; } }
        public partial class RowFields { public StringField PartName; }


        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
        {
            get { return Fields.RowDetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }
        #endregion Id and Name fields

        #region Constructor
        public RowDetailsRow()
        : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
            : base("[dbo].[RowDetails]")
            {
                LocalTextPrefix = "Rows.RowDetails";
            }
        }
        #endregion RowFields
    }
}
