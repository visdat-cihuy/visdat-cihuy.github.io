$(function() {
    $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('.unemployment-rate').offset().top }, 'slow');
        return false;
    });
});