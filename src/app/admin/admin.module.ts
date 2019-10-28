import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessCreateComponent } from './business-create/business-create.component';
import { BusinessUpdateComponent } from './business-update/business-update.component';
import { BusinessDeleteComponent } from './business-delete/business-delete.component';
import { BusinessComponent } from './business/business.component';



@NgModule({
  declarations: [BusinessListComponent, BusinessCreateComponent, BusinessUpdateComponent, BusinessDeleteComponent, BusinessComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
