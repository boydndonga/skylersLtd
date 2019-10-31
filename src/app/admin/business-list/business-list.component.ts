import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BusinessService } from '../crud/business.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  items:any[];
  // @Output() selectedBiz= new EventEmitter<any>();
  selectedBizIndex:number;
  selectedBiz:any;
  conf:boolean


  updateBizForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    avatar: new FormControl('')
  });

  constructor(
    private bizService:BusinessService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.bizService.getBusinesses()
    .subscribe(result => {
      this.items = result;
    })
  }

  editDetails(biz:any,bizIndex:number){
    if(this.selectedBizIndex==bizIndex){
      this.selectedBizIndex=null;
      // this.selectedBiz=''
    }else{
      this.selectedBizIndex=bizIndex;
      this.updateBizForm.value.title=biz.payload.doc.data().title
      this.updateBizForm.value.description=biz.payload.doc.data().description
      this.updateBizForm.value.avatar=biz.payload.doc.data().avatar
      // this.selectedBiz=biz
    }
  }

  updateRecord(biz:any){
    console.log(biz)
    this.bizService.updateBiz(biz)
    // this.selectedBiz= ''
    this.selectedBizIndex=null
  }

  // viewDetails(item:any){
  //   console.log(item.payload.doc.data().title);
  //   this.bizService.updateBiz(item);
  // }

  delete(item:any){
    console.log(item)
    this.conf = confirm('Are you sure to delete?');
    if(this.conf){
          this.bizService.deleteBiz(item)
        .then(
          res => {
            this.router.navigate(['/admin/list']);
          },
          err => {
            console.log(err);
          }
        )
      }
    }
    
  
}
