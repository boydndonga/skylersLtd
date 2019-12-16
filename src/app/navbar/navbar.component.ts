import {NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import { AuthService } from '../admin/auth/auth.service';


declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapseMenu: boolean;
  logStat: boolean;


  constructor(private router: Router, private auth:AuthService) {
    router.events.subscribe((event) => {

        if (event instanceof NavigationStart) {
          // Show loading indicator
          console.log(event);
        }

        if (event instanceof NavigationEnd) {
          // Hide loading indicator
          console.log(event);

        }

        if (event instanceof NavigationError) {
          // Hide loading indicator
          // Present error to user
          console.log(event.error);
        }
      });
  }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

 alreadyLogged(){
    if (this.auth.isLoggedIn) {
      return true;
    } else {
      return false;
    }
    location.reload();
  }
}
