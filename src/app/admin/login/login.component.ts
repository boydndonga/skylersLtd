import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logStat: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.alreadyLogged();
   }


  email =  new FormControl('');
  password = new FormControl('');


  onSubmit(mail,pass){
   this.authService.login(mail,pass);
  }

  alreadyLogged(){
    if (this.authService.isLoggedIn) {
      this.logStat=true;
      this.router.navigate(['/admin/list'])
    } else {
      this.logStat=false;
    }
  }

}
