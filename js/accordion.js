(function($) {
    Drupal.behaviors.leggodt_accordion = {
        attach: function (context, settings) {
            $(".paragraph--type--leggodt-accordion").accordion(
                {
                    header: ".leggodt-accordion-header",
                    collapsible: true
                }
            );

        }
    }
})(jQuery);
