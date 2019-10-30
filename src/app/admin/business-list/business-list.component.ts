import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../crud/business.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  items:any[];
  
  constructor(
    private bizService:BusinessService,
  ) { }

  ngOnInit() {
    this.bizService.getBusinesses()
    .then(result => {
      this.items = result;
    })
  }

}
