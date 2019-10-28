 

 (function changeNavColor() {
    $(window).scroll(() => {
      if ($(document).scrollTop() > 100) {
          $(".nav-link").addClass("navScrollDown").fadeIn()
          $('nav').addClass('shadow-lg')
          $('.fa-bars').addClass('fa-bars-blue')
      }
      else{
         $('.nav-link').removeClass('navScrollDown')
         $("nav").removeClass("shadow-lg")
         $('.fa-bars').removeClass('fa-bars-blue')
     }
  })
  })();
  
