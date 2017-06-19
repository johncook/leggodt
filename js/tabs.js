(function($) {
    Drupal.behaviors.leggodt_accordion = {
        attach: function (context, settings) {
            $(".paragraph--type--leggodt-tabs").tabs();
        }
    }
})(jQuery);
