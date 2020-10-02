
$(function() {

  window.autoScroll = false;

  $('.dot').on('click', function(e) {
    var $this = $(this);
    if (!$this.hasClass('active')) {
      $this.addClass('active')
        .siblings()
        .removeClass('active');
    }

    autoScroll = true;

    var position = $(this).data('position');
    
    if (position === 0) {
      $('html, body').animate({
        scrollTop: 0
      }, 500, function() {
        autoScroll = false
      });
    } 
    
    else {
      $('html, body').animate({
        scrollTop: $('.case-study').height() * (position + 1)
      }, 500, function() {
        autoScroll = false;
      });
    }

  });
  
});



