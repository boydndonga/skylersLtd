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

  viewDetails(biz:any,bizIndex:number){
    this.selectedBizIndex=bizIndex;
    this.selectedBiz=biz
    // this.router.navigate(['admin/update']);
  }

}
