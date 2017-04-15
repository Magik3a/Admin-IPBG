namespace AdminIPBG.Rows {
    @Serenity.Decorators.registerFormatter()
    export class ProjectorsFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            return "<span class='employee-symbol male'>" + Q.htmlEncode(ctx.value) + '</span>';
        }

    }
}