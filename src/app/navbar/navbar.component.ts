import { Component, OnInit } from '@angular/core';
import { Hello } from 'src/js/nav';


declare var jQuery: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Hello();
  }

}
