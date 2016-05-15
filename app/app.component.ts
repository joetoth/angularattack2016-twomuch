import {Component} from '@angular/core';
import {WebsiteComponent} from './website.component';
import {WebsiteService, Website} from './website.service';

@Component({
  selector: 'my-app',
  template: '<h1> TwoMuch Decision App - AngularAttack 2016</h1><website [site]="site"></website>',
  directives: [WebsiteComponent],
  providers: [WebsiteService]
})
export class AppComponent {
  site: Website;
  constructor(private service: WebsiteService) {
    this.site = service.getWebsites();
  }
}
