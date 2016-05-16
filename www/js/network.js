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
    $('#example-node').hover(
        function() {
            $('#example-network').attr("src", "../img/NetworkExample/Node.svg");
        }, function() {
            $('#example-network').attr("src", "../img/NetworkExample/Main.svg");
        }
    );
    $('#example-edge').hover(
        function() {
            $("#example-network").attr("src", "../img/NetworkExample/Edge.svg");
        }, function() {
            $("#example-network").attr("src", "../img/NetworkExample/Main.svg");
        }
    );


    // For resizing the image map on the title when the window is resized
    $('img[usemap]').rwdImageMaps();
});/**
 * Created by rberman on 5/15/16.
 */
