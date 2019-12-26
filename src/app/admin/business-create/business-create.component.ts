import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BusinessService } from '../crud/business.service';
import { Router } from '@angular/router';
import { Business } from '../business-class/business';


@Component({
  selector: 'app-business-create',
  templateUrl: './business-create.component.html',
  styleUrls: ['./business-create.component.css']
})
export class BusinessCreateComponent implements OnInit {

  createBiz = new Business("","");

  constructor(
    private bizService: BusinessService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Submitting..");

        this.bizService.createBusiness(this.createBiz)
    .then(
      res => {
        this.createBiz= new Business("","");;
        this.router.navigate(['/admin/business/list']);
      }
    ).catch(e=>{
      alert("error creating business")
    })
  }
}
