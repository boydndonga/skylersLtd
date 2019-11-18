import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BusinessService } from '../crud/business.service';
import { Router } from '@angular/router';
import { Business } from '../business-class/business';



@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  items:any[];
  selectedBizIndex:number;
  selectedBiz:any;
  conf:boolean
  changeState:Boolean = false



  updateForm = new Business("","",null);
   

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

  onFileChange(event){
    this.updateForm.avatar = event.target.files[0];
    this.changeState = true
  }

  editDetails(biz:any,bizIndex:number){
    if(this.selectedBizIndex==bizIndex){
      this.selectedBizIndex=null;
      this.selectedBiz=''
    }else{
      this.selectedBizIndex=bizIndex;
      this.updateForm =new Business(biz.payload.doc.data().title,biz.payload.doc.data().description,biz.payload.doc.data().avatar)
      this.selectedBiz=biz
    }
  }

  updateRecord(){
    this.bizService.updateBiz(this.updateForm,this.selectedBiz,this.changeState)
    this.selectedBizIndex=null;
    this.selectedBiz=''

  }

  delete(item:any){
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
