import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../admin/crud/business.service';


@Component({
  selector: 'app-b-dev',
  templateUrl: './b-dev.component.html',
  styleUrls: ['./b-dev.component.css']
})
export class BDevComponent implements OnInit {

  items:any[];


  constructor(
    private bizService:BusinessService,
  ) { }

  ngOnInit() {
    this.bizService.getBusinesses()
    .subscribe(result => {
      this.items =result;
    })
  }

}
