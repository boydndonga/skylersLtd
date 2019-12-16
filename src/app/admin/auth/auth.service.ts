import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
  
// firebase imports
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User; 

  constructor(
    public  afAuth:  AngularFireAuth, 
    public  router:  Router
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    }) }

    async  login(email:  string, password:  string) {

      try {
            await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
            this.router.navigate(['admin/business/list']);
        } catch (e) {
            alert("Error!"  +  e.message);
        }
      }

    async logout(){
      await this.afAuth.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['admin/login']);
    }
      
    async register(email: string, password: string) {
      return await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    }
   
    async sendEmailVerification() {
      return await this.afAuth.auth.currentUser.sendEmailVerification();
    }
   
    async sendPasswordResetEmail(passwordResetEmail: string) {
      return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
    }
   

    get isLoggedIn(): boolean {
      const  user  =  JSON.parse(localStorage.getItem('user'));
      return  user  !==  null;
    }

   
}
