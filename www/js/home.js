/**
 * Created by rberman on 4/24/16.
 */


$(document).ready(function(){

    // Slide down animation
    // Source: http://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
    $('a[href^="#"], area').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing');


    if($('#location-map')) {
        $('#location-map area').each(function() {
            var id = $(this).attr('id');
            $(this).mouseover(function() {
                $('#overlay'+id).show();

            });

            $(this).mouseout(function() {
                var id = $(this).attr('id');
                $('#overlay'+id).hide();
            });

        });
    }

    // For resizing the image map on the title
    $('img[usemap]').rwdImageMaps();
});