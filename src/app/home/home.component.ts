import {Component, Inject, OnInit, Optional} from '@angular/core';
import {SvgIconRegistryService} from 'angular-svg-icon';
import {by} from 'protractor';
import {Register} from 'ts-node';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//   constructor(private iconReg: SvgIconRegistryService) {
//     this.iconReg.addSvg('box',
//       '<?xml version="1.0" encoding="UTF-8"?>\n' +
//       '<svg width="681px" style="max-height:681px;max-width:100%" version="1.1" viewBox="-.5 -.5 681 681" xmlns="http://www.w3.org/2000/svg">\n' +
//       '<ellipse cx="340" cy="340" rx="200" ry="200" fill="#f5f5f5" pointer-events="none" stroke="#666"/>\n' +
//       '<g transform="translate(291.5,314.5)">\n' +
//       '<switch>\n' +
//       '<foreignObject width="96" height="50" overflow="visible" pointer-events="all" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">\n' +
//       '<div color="rgb(0, 105, 209)" display="inline-block" font-family="Verdana" font-size="22px" text-align="center" style="line-height:1.2;overflow-wrap:normal;vertical-align:top;white-space:nowrap;width:98px" xmlns="http://www.w3.org/1999/xhtml">\n' +
//       '<div display="inline-block" text-align="inherit" text-decoration="inherit" xmlns="http://www.w3.org/1999/xhtml">Business\n' +
//       '<div>Model</div>\n' +
//       '</div>\n' +
//       '</div>\n' +
//       '</foreignObject>\n' +
//       '<text x="48" y="36" fill="#0069D1" font-family="Verdana" font-size="22px" text-anchor="middle">[Not supported by viewer]</text>\n' +
//       '</switch>\n' +
//       '</g>\n' +
//       '<ellipse cx="340" cy="80" rx="80" ry="80" fill="#f5f5f5" pointer-events="none" stroke="#666"/>\n' +
//       '<g transform="translate(261.5,54.5)">\n' +
//       '<switch>\n' +
//       '<foreignObject width="156" height="50" overflow="visible" pointer-events="all" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">\n' +
//       '<div color="rgb(0, 105, 209)" display="inline-block" font-family="Verdana" font-size="22px" text-align="center" style="line-height:1.2;overflow-wrap:normal;vertical-align:top;white-space:normal;width:156px" xmlns="http://www.w3.org/1999/xhtml">\n' +
//       '<div display="inline-block" text-align="inherit" text-decoration="inherit" xmlns="http://www.w3.org/1999/xhtml">Register with us</div>\n' +
//       '</div>\n' +
//       '</foreignObject>\n' +
//       '<text x="78" y="36" fill="#0069D1" font-family="Verdana" font-size="22px" text-anchor="middle">Register with us</text>\n' +
//       '</switch>\n' +
//       '</g>\n' +
//       '<ellipse cx="340" cy="600" rx="80" ry="80" fill="#f5f5f5" pointer-events="none" stroke="#666"/>\n' +
//       '<g transform="translate(261.5,574.5)">\n' +
//       '<switch>\n' +
//       '<foreignObject width="156" height="50" overflow="visible" pointer-events="all" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">\n' +
//       '<div color="rgb(0, 105, 209)" display="inline-block" font-family="Verdana" font-size="22px" text-align="center" style="line-height:1.2;overflow-wrap:normal;vertical-align:top;white-space:normal;width:156px" xmlns="http://www.w3.org/1999/xhtml">\n' +
//       '<div display="inline-block" text-align="inherit" text-decoration="inherit" xmlns="http://www.w3.org/1999/xhtml">all\n' +
//       '                    time support</div>\n' +
//       '</div>\n' +
//       '</foreignObject>\n' +
//       '<text x="78" y="36" fill="#0069D1" font-family="Verdana" font-size="22px" text-anchor="middle">all time support</text>\n' +
//       '</switch>\n' +
//       '</g>\n' +
//       '<ellipse cx="600" cy="340" rx="80" ry="80" fill="#f5f5f5" pointer-events="none" stroke="#666"/>\n' +
//       '<g transform="translate(521.5,314.5)">\n' +
//       '<switch>\n' +
//       '<foreignObject width="156" height="50" overflow="visible" pointer-events="all" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">\n' +
//       '<div color="rgb(0, 105, 209)" display="inline-block" font-family="Verdana" font-size="22px" text-align="center" style="line-height:1.2;overflow-wrap:normal;vertical-align:top;white-space:normal;width:156px" xmlns="http://www.w3.org/1999/xhtml">\n' +
//       '<div display="inline-block" text-align="inherit" text-decoration="inherit" xmlns="http://www.w3.org/1999/xhtml">Select the service</div>\n' +
//       '</div>\n' +
//       '</foreignObject>\n' +
//       '<text x="78" y="36" fill="#0069D1" font-family="Verdana" font-size="22px" text-anchor="middle">Select the service</text>\n' +
//       '</switch>\n' +
//       '</g>\n' +
//       '<ellipse cx="80" cy="340" rx="80" ry="80" fill="#f5f5f5" pointer-events="none" stroke="#666"/>\n' +
//       '<g transform="translate(17.5,327.5)">\n' +
//       '<switch>\n' +
//       '<foreignObject width="124" height="24" overflow="visible" pointer-events="all" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">\n' +
//       '<div color="rgb(0, 105, 209)" display="inline-block" font-family="Verdana" font-size="22px" text-align="center" style="line-height:1.2;overflow-wrap:normal;vertical-align:top;white-space:nowrap;width:126px" xmlns="http://www.w3.org/1999/xhtml">\n' +
//       '<div display="inline-block" text-align="inherit" text-decoration="inherit" xmlns="http://www.w3.org/1999/xhtml">mentorship</div>\n' +
//       '</div>\n' +
//       '</foreignObject>\n' +
//       '<text x="62" y="23" fill="#0069D1" font-family="Verdana" font-size="22px" text-anchor="middle">mentorship</text>\n' +
//       '</switch>\n' +
//       '</g>\n' +
//       '<ellipse cx="170" cy="170" rx="80" ry="80" fill="#f5f5f5" pointer-events="none" stroke="#666"/>\n' +
//       '<g transform="translate(140.5,157.5)">\n' +
//       '<switch>\n' +
//       '<foreignObject width="58" height="24" overflow="visible" pointer-events="all" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">\n' +
//       '<div color="rgb(0, 105, 209)" display="inline-block" font-family="Verdana" font-size="22px" text-align="center" style="line-height:1.2;overflow-wrap:normal;vertical-align:top;white-space:nowrap;width:59px" xmlns="http://www.w3.org/1999/xhtml">\n' +
//       '<div display="inline-block" text-align="inherit" text-decoration="inherit" xmlns="http://www.w3.org/1999/xhtml">loans</div>\n' +
//       '</div>\n' +
//       '</foreignObject>\n' +
//       '<text x="29" y="23" fill="#0069D1" font-family="Verdana" font-size="22px" text-anchor="middle">loans</text>\n' +
//       '</switch>\n' +
//       '</g>\n' +
//       '<ellipse cx="510" cy="170" rx="80" ry="80" fill="#f5f5f5" pointer-events="none" stroke="#666"/>\n' +
//       '<g transform="translate(431.5,144.5)">\n' +
//       '<switch>\n' +
//       '<foreignObject width="156" height="50" overflow="visible" pointer-events="all" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">\n' +
//       '<div color="rgb(0, 105, 209)" display="inline-block" font-family="Verdana" font-size="22px" text-align="center" style="line-height:1.2;overflow-wrap:normal;vertical-align:top;white-space:normal;width:156px" xmlns="http://www.w3.org/1999/xhtml">\n' +
//       '<div display="inline-block" text-align="inherit" text-decoration="inherit" xmlns="http://www.w3.org/1999/xhtml">become a member</div>\n' +
//       '</div>\n' +
//       '</foreignObject>\n' +
//       '<text x="78" y="36" fill="#0069D1" font-family="Verdana" font-size="22px" text-anchor="middle">become a member</text>\n' +
//       '</switch>\n' +
//       '</g>\n' +
//       '<ellipse cx="510" cy="510" rx="80" ry="80" fill="#f5f5f5" pointer-events="none" stroke="#666"/>\n' +
//       '<g transform="translate(431.5,484.5)">\n' +
//       '<switch>\n' +
//       '<foreignObject width="156" height="50" overflow="visible" pointer-events="all" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">\n' +
//       '<div color="rgb(0, 105, 209)" display="inline-block" font-family="Verdana" font-size="22px" text-align="center" style="line-height:1.2;overflow-wrap:normal;vertical-align:top;white-space:normal;width:156px" xmlns="http://www.w3.org/1999/xhtml">\n' +
//       '<div display="inline-block" text-align="inherit" text-decoration="inherit" xmlns="http://www.w3.org/1999/xhtml">open an account</div>\n' +
//       '</div>\n' +
//       '</foreignObject>\n' +
//       '<text x="78" y="36" fill="#0069D1" font-family="Verdana" font-size="22px" text-anchor="middle">open an account</text>\n' +
//       '</switch>\n' +
//       '</g>\n' +
//       '<ellipse cx="170" cy="510" rx="80" ry="80" fill="#f5f5f5" pointer-events="none" stroke="#666"/>\n' +
//       '<g transform="translate(91.5,484.5)">\n' +
//       '<switch>\n' +
//       '<foreignObject width="156" height="50" overflow="visible" pointer-events="all" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">\n' +
//       '<div color="rgb(0, 105, 209)" display="inline-block" font-family="Verdana" font-size="22px" text-align="center" style="line-height:1.2;overflow-wrap:normal;vertical-align:top;white-space:normal;width:156px" xmlns="http://www.w3.org/1999/xhtml">\n' +
//       '<div display="inline-block" text-align="inherit" text-decoration="inherit" xmlns="http://www.w3.org/1999/xhtml">investment opportunities</div>\n' +
//       '</div>\n' +
//       '</foreignObject>\n' +
//       '<text x="78" y="36" fill="#0069D1" font-family="Verdana" font-size="22px" text-anchor="middle">investment opportunities</text>\n' +
//       '</switch>\n' +
//       '</g>\n' +
//       '</svg>\n');
// }

  ngOnInit() {
  }

}
