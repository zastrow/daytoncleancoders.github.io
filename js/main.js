$(window).load(function() {
  var resizer = function () {
    var tallest_h2 = 0;
    $('.article-title h2').each(function () {
      if ($(this).outerHeight() > tallest_h2 ) {
        tallest_h2 = $(this).outerHeight();
      }
    });
    $('.article-title').css({'min-height': tallest_h2});
  };

  resizer(); // set initially

  $(window).on('resize', resizer); // adjust on browser resize


});