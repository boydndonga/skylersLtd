 

 function Hello() {
      $(window).scroll(() => {
        if ($(document).scrollTop() > 650) {
            $("nav").addClass("navScrollDown")
        }
        else{
          $("nav").removeClass("navScrollDown")
       }


    })
}
