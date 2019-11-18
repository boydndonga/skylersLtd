import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BusinessService } from '../crud/business.service';
import { Router } from '@angular/router';
import { Business } from '../business-class/business';
import { UploadService } from '../crud/upload.service';



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
    // private upldService:UploadService,
  ) { }

  ngOnInit() {
  }

  onFileChange(event){
    this.createBiz.avatar = event.target.files[0];
  }

  onSubmit(){
    console.log("Submitting..");

    
    // this.upldService.pushUpload(this.createBiz);
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
