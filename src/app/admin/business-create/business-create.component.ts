import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-business-create',
  templateUrl: './business-create.component.html',
  styleUrls: ['./business-create.component.css']
})
export class BusinessCreateComponent implements OnInit {

  createBiz = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });


  constructor() { }

  ngOnInit() {
  }

}
