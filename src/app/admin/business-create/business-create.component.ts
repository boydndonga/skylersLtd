import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BusinessService } from '../crud/business.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-business-create',
  templateUrl: './business-create.component.html',
  styleUrls: ['./business-create.component.css']
})
export class BusinessCreateComponent implements OnInit {

  createBiz = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    avatar: new FormControl('')
  });


  constructor(
    private bizService: BusinessService,
    private router:Router,
    
  ) { }

  ngOnInit() {
  }

  onSubmit(value:any){
    this.bizService.createBusiness(value)
    .then(
      res => {
        this.createBiz.reset();
        this.router.navigate(['/admin/list']);
      }
    )
  }
}
