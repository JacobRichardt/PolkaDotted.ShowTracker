requirejs.config(
{
	paths:
	{
		jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
		bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/js/bootstrap.min',
		knockout: '//cdnjs.cloudflare.com/ajax/libs/knockout/3.0.0/knockout-min'
	}
});

require(["jquery", "knockout", "ViewModels/Shell"], (jquery:JQueryStatic, knockout:KnockoutStatic, shell:any)=>
{
	knockout.applyBindings(new shell(), jquery(".Content")[0]);
});