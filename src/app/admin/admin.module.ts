import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessCreateComponent } from './business-create/business-create.component';
import { BusinessComponent } from './business/business.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    BusinessListComponent, 
    BusinessCreateComponent, 
    BusinessComponent, 
    LoginComponent,
    NewsComponent
  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
