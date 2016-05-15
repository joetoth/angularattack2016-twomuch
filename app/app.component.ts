import {Component} from '@angular/core';
import {WebsiteComponent} from './website.component';
import {WebsiteService, Website} from './website.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.html',
  directives: [WebsiteComponent],
  providers: [WebsiteService]
})
export class AppComponent {
  site: Website;
  sites: Array<Website> = new Array;
  index: number = 0;
  isDataAvailable: boolean = false;
  constructor (private service: WebsiteService) {
  this.service = service;
}
  ngOnInit() {
    let self = this;
    this.service.getWebsites()
      .then(function(resp){
        let obj = resp.val();
        for (var key in obj) {
          self.sites.push(obj[key]);
        }
        self.site = self.sites[self.index];
        self.isDataAvailable = true;
      })
  }

  next() {
    this.index++;
    this.site = this.sites[this.index];
  }

  love() {
    
  }

}
