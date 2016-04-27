// header transition in on scroll
$(document).ready(function(){       
  $("#btn-academic").click(function() {
    $('html, body').animate({
        scrollTop: $("#academic").offset().top
    }, 700);
  });

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
});

// scroll to element