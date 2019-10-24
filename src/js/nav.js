 

 (function changeNavColor() {
    $(window).scroll(() => {
      if ($(document).scrollTop() > 100) {
          $("nav").addClass("navScrollDown").fadeIn()
      }
      else{
        $("nav").removeClass("navScrollDown")
     }
  })
  })();
