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
  site: any = {};
  isDataAvailable: boolean = false;
  constructor (private service: WebsiteService) {
  this.service = service;
}

  ngOnInit() {
    let self = this;
    this.service.getWebsites()
      .then(function(resp){
        self.site = resp.val()[Object.keys(resp.val())[0]];
        self.isDataAvailable = true;
      })
  }

}
