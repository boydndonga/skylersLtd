import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  // constructor() { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  })


    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.loginForm.value);
    }
}
