import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
  
// firebase imports
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public angularFireAuth: AngularFireAuth,
    public router: Router
  ) {
    this.angularFireAuth.authState.subscribe(userResponse => {
      if (userResponse) {
        localStorage.setItem('user', JSON.stringify(userResponse));
      } else {
        localStorage.setItem('user', null);
      }
    }) }

    async login(email: string, password: string) {
      return await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);

    }
   
    async register(email: string, password: string) {
      return await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
    }
   
    async sendEmailVerification() {
      return await this.angularFireAuth.auth.currentUser.sendEmailVerification();
    }
   
    async sendPasswordResetEmail(passwordResetEmail: string) {
      return await this.angularFireAuth.auth.sendPasswordResetEmail(passwordResetEmail);
    }
   
    async logout() {
      return await this.angularFireAuth.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['admin/login']);
    }

    isUserLoggedIn() {
      return JSON.parse(localStorage.getItem('user'));
    }
   
}
