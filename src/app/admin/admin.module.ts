import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessCreateComponent } from './business-create/business-create.component';
import { BusinessUpdateComponent } from './business-update/business-update.component';
import { LandsGalleryComponent} from '../lands-gallery/lands-gallery.component';
import { BusinessComponent } from './business/business.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [BusinessListComponent, BusinessCreateComponent, BusinessUpdateComponent, BusinessComponent,],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
