using FluentMigrator;

namespace AdminIPBG.Migrations.DefaultDB
{
    [Migration(20190526141500)]
    public class DefaultDB_20190526_141500_RowDetails : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("RowDetails", "RowDetailId", s => s
                .WithColumn("Description").AsString(500).NotNullable()
                .WithColumn("Quantity").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("PartId").AsInt32().Nullable()
                .ForeignKey("Parts", "PartId")
                .WithColumn("RowId").AsInt32().Nullable()
                .ForeignKey("Rows", "RowId")
            );

        }
    }
}