requirejs.config({
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
        bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/js/bootstrap.min',
        knockout: '//cdnjs.cloudflare.com/ajax/libs/knockout/3.0.0/knockout-min'
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
});

require(["jquery", "knockout", "ViewModels/Shell", "SimpleExternalTemplates", "bootstrap"], function (jquery, knockout, shell) {
    knockout.applyBindings(new shell(), jquery(".Shell")[0]);
});
//# sourceMappingURL=Main.js.map
