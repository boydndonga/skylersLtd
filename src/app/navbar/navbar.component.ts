import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {$} from 'protractor';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, @Inject(DOCUMENT) document) {
  // const mainNav = document.getElementById('#navbarResponsive') as HTMLElement;

  router.events.subscribe((event) => {

      if (event instanceof NavigationStart) {
        // Show loading indicator
        // if (mainNav.hasClass('open')) {
        //   mainNav.css('height', '1px').removeClass('in').addClass('collapse');
        //   mainNav.addClass('open');
        // }
        console.log(event);
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        // if (mainNav.hasClass('open')) {
        //   mainNav.css('height', '1px').removeClass('in').addClass('collapse');
        //   mainNav.addClass('open');
        // }
        console.log(event);

      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        // if (mainNav.hasClass('open')) {
        //   mainNav.css('height', '1px').removeClass('in').addClass('collapse');
        //   mainNav.addClass('open');
        // }
          // Present error to user
        console.log(event.error);
      }
    });

  }

  ngOnInit() {

  }

}
