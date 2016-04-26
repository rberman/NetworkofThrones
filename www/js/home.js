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

    // Mouseover buttons
    $('#network-node').hover(
        function() {
            $('#title-text').attr("src", "img/cover-text-net.png");
        }, function() {
            $('#title-text').attr("src", "img/cover-text.png");
        }
    );
    $('#of-node').hover(
        function() {
            $("#title-text").attr("src", "img/cover-text-of.png");
        }, function() {
            $("#title-text").attr("src", "img/cover-text.png");
        }
    );
    $('#thrones-node').hover(
        function() {
            $("#title-text").attr("src", "img/cover-text-thro.png");
        }, function() {
            $("#title-text").attr("src", "img/cover-text.png");
        }
    );


    // For resizing the image map on the title
    $('img[usemap]').rwdImageMaps();
});