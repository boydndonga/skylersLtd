import { NgModule } from '@angular/core';
import {Routes, RouterModule, ActivatedRouteSnapshot} from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import {HomeComponent} from './home/home.component';
import { LandsGalleryComponent } from './lands-gallery/lands-gallery.component';
import { BDevComponent } from './b-dev/b-dev.component';
import {ContactComponent} from './contact/contact.component';
import {NewsComponent} from './news/news.component';
import {NotFoundComponent} from './not-found/not-found.component';

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
  {
    path: 'business-development',
    component: BDevComponent 
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
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
