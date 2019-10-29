import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import {HomeComponent} from './home/home.component';
import { LandsGalleryComponent } from './lands-gallery/lands-gallery.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [

  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },

  {
     path:'gallery',
    component: LandsGalleryComponent
  },
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
