define(["require", "exports", "knockout"], function(require, exports, knockout) {
    var engine = new knockout.nativeTemplateEngine();
    var templates = {};

    function RenderTemplate(template, bindingContext, options, templateDocument) {
        return engine.renderTemplateSource(templateSource, bindingContext, options);
    }

    engine.renderTemplate = RenderTemplate;

    knockout.setTemplateEngine(engine);
});
//# sourceMappingURL=SimpleExternalTemplates.js.map
