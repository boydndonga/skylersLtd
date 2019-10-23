import { Component } from '@angular/core';
import { Hello } from 'src/js/nav'


declare var jQuery: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skylersLtd';

  ngOnInit(){
    Hello();

  }
}
