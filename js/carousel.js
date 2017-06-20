(function($) {
    Drupal.behaviors.leggodt_carousel = {
        attach: function (context, settings) {
            $(".paragraph--type--leggodt-carousel > .field--name-leggodt-section-content").slick({
                autoplay: true,
                arrows: true,
            });
        }
    }
})(jQuery);
