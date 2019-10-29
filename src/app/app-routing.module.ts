import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandsGalleryComponent } from './lands-gallery/lands-gallery.component';


const routes: Routes = [

  {
    path: 'about',
    component: AboutUsComponent
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
