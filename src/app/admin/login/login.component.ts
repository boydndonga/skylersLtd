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

  responseMessage: string = '';
  responseMessageType: string = '';
  emailInput: string;
  passwordInput: string;
  userDetails: any;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  email =  new FormControl('');
  password = new FormControl('');



}
