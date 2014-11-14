import jquery = require("jquery");
import knockout = require("knockout");

var engine = new knockout.nativeTemplateEngine();
var templates: { [name: string]: string } = {};

function RenderTemplate(template:any, bindingContext:any, options:any, templateDocument:any)
{
	return engine.renderTemplateSource(templateSource, bindingContext, options);
}

engine.renderTemplate = RenderTemplate;

knockout.setTemplateEngine(engine);