(function($) {

    $.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
    }; 

    $.fn.accordion_fluid = function(milliseconds) {
        $('.accordion_field').hide();
        this.on('click', '.accordion_toggle', function(e){
            $('.accordion_field').next().show();
            e.preventDefault();
            $(this).next('.accordion_field').slideFadeToggle(milliseconds);
            ;
        })
        return this;
    }

}) (jQuery);

$('.participateList').accordion_fluid(300);