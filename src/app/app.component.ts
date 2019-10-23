import { Component } from '@angular/core';
import { Hello } from 'src/js/nav'


declare var jQuery: any;


function Hello(){
 console.log("byad");
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skylersLtd';

  ngOnInit(){
    (function ($) {
      Hello();
      $(window).scroll(() => {
        if ($(document).scrollTop() > 650) {
            $("nav").addClass("navScrollDown")
        }
        else{
          $("nav").removeClass("navScrollDown")
       }
    })
    })(jQuery);

  }
}
