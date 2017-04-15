namespace AdminIPBG.Rows {
    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
    export class RowsFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string {
            var text = Q.htmlEncode(ctx.value);


            if (!this.SubObject) {
                return text;
            }

            return "<span class='employee-symbol male'>" + text + '</span>';
        }

        @Serenity.Decorators.option()
        public SubObject: string;

        public initializeColumn(column: Slick.Column) {
            column.referencedFields = column.referencedFields || [];
            if (this.SubObject)
                column.referencedFields.push(this.SubObject);
        }
        
    }
}