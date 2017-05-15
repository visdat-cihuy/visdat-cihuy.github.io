$(function() {
    $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('#unemploymentRate').offset().top }, 'slow');
        return false;
    });

    $('.main-chart-annotations').slick({
      dots: false,
      infinite: true,
      arrows: false,
      speed: 200,
      fade: true,
      cssEase: 'ease',
      draggable: false,
    });

    $('a[data-slide]').click(function(e) {
      e.preventDefault();
      var slideno = $(this).data('slide');
      $('.main-chart-annotations').slick('slickGoTo', slideno - 1);
    });
});