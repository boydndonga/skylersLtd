import { NgModule } from '@angular/core';
import {Routes, RouterModule, ActivatedRouteSnapshot} from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import {HomeComponent} from './home/home.component';
import { LandsGalleryComponent } from './lands-gallery/lands-gallery.component';
import {ContactComponent} from './contact/contact.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [

  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: '',
    component: HomeComponent},
  {
    path: 'gallery',
    component: LandsGalleryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
