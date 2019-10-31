import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BusinessService } from '../crud/business.service';
import { Router } from '@angular/router';

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

  // viewDetails(biz:any,bizIndex:number){
  //   this.selectedBizIndex=bizIndex;
  //   this.selectedBiz=biz
  // }

  viewDetails(biz:any){
    console.log(biz);
    this.bizService.updateEdit(biz);
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
