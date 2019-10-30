import {Component, Inject, OnInit, Optional} from '@angular/core';
import {by} from 'protractor';
import {Register} from 'ts-node';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  svg: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.svg = this.sanitizer.bypassSecurityTrustHtml(
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"\n' +
      '\t\t\t\t\twidth="681px" viewBox="-0.5 -0.5 681 681" style="max-width:100%;max-height:681px;"><defs /><g><ellipse cx="340" cy="340" rx="200" ry="200" fill="#f5f5f5" stroke="#666666"\n' +
      '\t\t\t\t\t\t\tpointer-events="none" /><g transform="translate(291.5,314.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="96" height="50"\n' +
      '\t\t\t\t\t\t\t\t\trequiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\tstyle="display: inline-block; font-size: 22px; font-family: Verdana; color: rgb(0, 105, 209); line-height: 1.2; vertical-align: top; width: 98px; white-space: nowrap; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\t\tstyle="display:inline-block;text-align:inherit;text-decoration:inherit;">\n' +
      '\t\t\t\t\t\t\t\t\t\t\tBusiness\n' +
      '\t\t\t\t\t\t\t<div>Model</div></div></div></foreignObject><text x="48" y="36" fill="#0069D1" text-anchor="middle" font-size="22px"\n' +
      '\t\t\t\t\t\t\t\t\tfont-family="Verdana">[Not supported by viewer]</text></switch></g><ellipse cx="340" cy="80" rx="80" ry="80" fill="#f5f5f5" stroke="#666666"\n' +
      '\t\t\t\t\t\t\tpointer-events="none" /><g transform="translate(261.5,54.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="156" height="50"\n' +
      '\t\t\t\t\t\t\t\t\trequiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\tstyle="display: inline-block; font-size: 22px; font-family: Verdana; color: rgb(0, 105, 209); line-height: 1.2; vertical-align: top; width: 156px; white-space: normal; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\t\tstyle="display:inline-block;text-align:inherit;text-decoration:inherit;">\n' +
      '\t\t\t\t\t\t\t\t\t\t\tRegister with us\n' +
      '\t\t\t\t\t\t</div></div></foreignObject><text x="78" y="36" fill="#0069D1" text-anchor="middle" font-size="22px"\n' +
      '\t\t\t\t\t\t\t\t\tfont-family="Verdana">Register with us</text></switch></g><ellipse cx="340" cy="600" rx="80" ry="80" fill="#f5f5f5" stroke="#666666"\n' +
      '\t\t\t\t\t\t\tpointer-events="none" /><g transform="translate(261.5,574.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="156" height="50"\n' +
      '\t\t\t\t\t\t\t\t\trequiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\tstyle="display: inline-block; font-size: 22px; font-family: Verdana; color: rgb(0, 105, 209); line-height: 1.2; vertical-align: top; width: 156px; white-space: normal; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\t\tstyle="display:inline-block;text-align:inherit;text-decoration:inherit;">all\n' +
      '\t\t\t\t\t\t\t\t\t\t\ttime support\n' +
      '\t\t\t\t\t\t</div></div></foreignObject><text x="78" y="36" fill="#0069D1" text-anchor="middle" font-size="22px"\n' +
      '\t\t\t\t\t\t\t\t\tfont-family="Verdana">all time support</text></switch></g><ellipse cx="600" cy="340" rx="80" ry="80" fill="#f5f5f5" stroke="#666666"\n' +
      '\t\t\t\t\t\t\tpointer-events="none" /><g transform="translate(521.5,314.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="156" height="50"\n' +
      '\t\t\t\t\t\t\t\t\trequiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\tstyle="display: inline-block; font-size: 22px; font-family: Verdana; color: rgb(0, 105, 209); line-height: 1.2; vertical-align: top; width: 156px; white-space: normal; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\t\tstyle="display:inline-block;text-align:inherit;text-decoration:inherit;">\n' +
      '\t\t\t\t\t\t\t\t\t\t\tSelect the service\n' +
      '\t\t\t\t\t\t</div></div></foreignObject><text x="78" y="36" fill="#0069D1" text-anchor="middle" font-size="22px"\n' +
      '\t\t\t\t\t\t\t\t\tfont-family="Verdana">Select the service</text></switch></g><ellipse cx="80" cy="340" rx="80" ry="80" fill="#f5f5f5" stroke="#666666"\n' +
      '\t\t\t\t\t\t\tpointer-events="none" /><g transform="translate(17.5,327.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="124" height="24"\n' +
      '\t\t\t\t\t\t\t\t\trequiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\tstyle="display: inline-block; font-size: 22px; font-family: Verdana; color: rgb(0, 105, 209); line-height: 1.2; vertical-align: top; width: 126px; white-space: nowrap; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\t\tstyle="display:inline-block;text-align:inherit;text-decoration:inherit;">\n' +
      '\t\t\t\t\t\t\t\t\t\t\tmentorship\n' +
      '\t\t\t\t\t\t</div></div></foreignObject><text x="62" y="23" fill="#0069D1" text-anchor="middle" font-size="22px"\n' +
      '\t\t\t\t\t\t\t\t\tfont-family="Verdana">mentorship</text></switch></g><ellipse cx="170" cy="170" rx="80" ry="80" fill="#f5f5f5" stroke="#666666"\n' +
      '\t\t\t\t\t\t\tpointer-events="none" /><g transform="translate(140.5,157.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="58" height="24"\n' +
      '\t\t\t\t\t\t\t\t\trequiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\tstyle="display: inline-block; font-size: 22px; font-family: Verdana; color: rgb(0, 105, 209); line-height: 1.2; vertical-align: top; width: 59px; white-space: nowrap; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\t\tstyle="display:inline-block;text-align:inherit;text-decoration:inherit;">\n' +
      '\t\t\t\t\t\t\t\t\t\t\tloans\n' +
      '\t\t\t\t\t\t</div></div></foreignObject><text x="29" y="23" fill="#0069D1" text-anchor="middle" font-size="22px"\n' +
      '\t\t\t\t\t\t\t\t\tfont-family="Verdana">loans</text></switch></g><ellipse cx="510" cy="170" rx="80" ry="80" fill="#f5f5f5" stroke="#666666"\n' +
      '\t\t\t\t\t\t\tpointer-events="none" /><g transform="translate(431.5,144.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="156" height="50"\n' +
      '\t\t\t\t\t\t\t\t\trequiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\tstyle="display: inline-block; font-size: 22px; font-family: Verdana; color: rgb(0, 105, 209); line-height: 1.2; vertical-align: top; width: 156px; white-space: normal; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\t\tstyle="display:inline-block;text-align:inherit;text-decoration:inherit;">\n' +
      '\t\t\t\t\t\t\t\t\t\t\tbecome a member\n' +
      '\t\t\t\t\t\t</div></div></foreignObject><text x="78" y="36" fill="#0069D1" text-anchor="middle" font-size="22px"\n' +
      '\t\t\t\t\t\t\t\t\tfont-family="Verdana">become a member</text></switch></g><ellipse cx="510" cy="510" rx="80" ry="80" fill="#f5f5f5" stroke="#666666"\n' +
      '\t\t\t\t\t\t\tpointer-events="none" /><g transform="translate(431.5,484.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="156" height="50"\n' +
      '\t\t\t\t\t\t\t\t\trequiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\tstyle="display: inline-block; font-size: 22px; font-family: Verdana; color: rgb(0, 105, 209); line-height: 1.2; vertical-align: top; width: 156px; white-space: normal; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\t\tstyle="display:inline-block;text-align:inherit;text-decoration:inherit;">\n' +
      '\t\t\t\t\t\t\t\t\t\t\topen an account\n' +
      '\t\t\t\t\t\t</div></div></foreignObject><text x="78" y="36" fill="#0069D1" text-anchor="middle" font-size="22px"\n' +
      '\t\t\t\t\t\t\t\t\tfont-family="Verdana">open an account</text></switch></g><ellipse cx="170" cy="510" rx="80" ry="80" fill="#f5f5f5" stroke="#666666"\n' +
      '\t\t\t\t\t\t\tpointer-events="none" /><g transform="translate(91.5,484.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="156" height="50"\n' +
      '\t\t\t\t\t\t\t\t\trequiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\tstyle="display: inline-block; font-size: 22px; font-family: Verdana; color: rgb(0, 105, 209); line-height: 1.2; vertical-align: top; width: 156px; white-space: normal; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml"\n' +
      '\t\t\t\t\t\t\t\t\t\t\tstyle="display:inline-block;text-align:inherit;text-decoration:inherit;">\n' +
      '\t\t\t\t\t\t\t\t\t\t\tinvestment opportunities\n' +
      '\t\t\t\t\t\t</div></div></foreignObject><text x="78" y="36" fill="#0069D1" text-anchor="middle" font-size="22px"\n' +
      '\t\t\t\t\t\t\t\t\tfont-family="Verdana">investment opportunities</text></switch></g></g></svg>'
    );
  }

}
