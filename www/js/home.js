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

    // When user hovers over nodes in the cover title, they get bigger
    $('#network-node').hover(
        function() {
            $('#title-text').attr("src", "img/CoverText/cover-text-net.png");
        }, function() {
            $('#title-text').attr("src", "img/CoverText/cover-text.png");
        }
    );
    $('#of-node').hover(
        function() {
            $("#title-text").attr("src", "img/CoverText/cover-text-of.png");
        }, function() {
            $("#title-text").attr("src", "img/CoverText/cover-text.png");
        }
    );
    $('#thrones-node').hover(
        function() {
            $("#title-text").attr("src", "img/CoverText/cover-text-thro.png");
        }, function() {
            $("#title-text").attr("src", "img/CoverText/cover-text.png");
        }
    );


    // For resizing the image map on the title when the window is resized
    $('img[usemap]').rwdImageMaps();
});