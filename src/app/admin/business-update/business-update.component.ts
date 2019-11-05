import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-business-update',
  templateUrl: './business-update.component.html',
  styleUrls: ['./business-update.component.css']
})
export class BusinessUpdateComponent implements OnInit {


  updateBiz = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    avatar: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

  }
  
  updater(biz:any){
    console.log(this.updateBiz.value);
  }

}
