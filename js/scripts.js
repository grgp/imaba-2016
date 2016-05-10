// header transition in on scroll
$(document).ready(function(){       
  
  var scroll_start = 0;
  var startchange = $('#dummy-trigger');
  var offset = startchange.offset();
  
  if (startchange.length){
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $(".navbar-color").css('visibility', 'visible');
        $(".navbar-color").css('opacity', '1');
      } else {
        $('.navbar-color').css('visibility', 'hidden');
        $(".navbar-color").css('opacity', '0');
      }
    });
  }

  $("#btn-info-ui, #ico-info-ui").click(function() {
    $('html, body').animate({
        scrollTop: $("#info-ui").offset().top -40
    }, 700);
  });

  $("#btn-academic, #ico-academic").click(function() {
    $('html, body').animate({
        scrollTop: $("#academic").offset().top -40
    }, 1000);
  });

  $("#btn-lain-lain, #ico-lain-lain").click(function() {
    $('html, body').animate({
        scrollTop: $("#lain-lain").offset().top -40
    }, 1100);
  });

});

// scroll to element