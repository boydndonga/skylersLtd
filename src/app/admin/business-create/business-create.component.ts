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

  createBiz = new Business("","",null);

  constructor(
    private bizService: BusinessService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  onFileChange(event){
    this.createBiz.avatar = event.target.files[0];
  }

  onSubmit(){
    console.log("Submitting..");

        this.bizService.createBusiness(this.createBiz)
    .then(
      res => {
        this.createBiz= new Business("","",null);;
        this.router.navigate(['/admin/list']);
      }
    ).catch(e=>{
      alert("error creating business")
    })
  }
}
