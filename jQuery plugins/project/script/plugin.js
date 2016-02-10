(function($){
    $.fn.examplePlugIn = function(){
        var element = this;
        element.mouseover(function(){
            $(this).css({"width": "500px", "height": "500px", "background-color": "#1ad"});
        });
        element.mouseout(function(){
            $(this).css({"width": "500px", "height": "500px", "background-color": "#F54"});

        });
    }
}(jQuery));