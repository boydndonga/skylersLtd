import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { AdminModule } from './admin/admin.module';
import {LandsGalleryComponent} from './lands-gallery/lands-gallery.component';
import { HomeComponent } from './home/home.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import { ContactComponent } from './contact/contact.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    FooterComponent,
    LandsGalleryComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AngularSvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
