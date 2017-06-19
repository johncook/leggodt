(function($) {
    Drupal.behaviors.leggodt_tabs = {
        attach: function (context, settings) {
            $(".paragraph--type--leggodt-tabs").tabs();
        }
    }
})(jQuery);
