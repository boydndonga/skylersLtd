import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

// firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {LandsGalleryComponent} from './lands-gallery/lands-gallery.component';
import { NotFoundComponent } from './not-found/not-found.component';


const config = {
  apiKey: 'AIzaSyDkeFvdlaRdQyJ7C00v8tcq1GALX8jBiOE',
  authDomain: 'fir-auth-91d9d.firebaseapp.com',
  databaseURL: 'https://fir-auth-91d9d.firebaseio.com',
  projectId: 'fir-auth-91d9d',
  storageBucket: 'fir-auth-91d9d.appspot.com',
  messagingSenderId: '286101264214',
  appId: '1:286101264214:web:7b94e117650106ec8d28f7',
  measurementId: 'G-P41Z3KRWDC'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    FooterComponent,
    LandsGalleryComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
