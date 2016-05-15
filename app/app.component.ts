import {Component} from '@angular/core';
import {WebsiteComponent} from './website.component';
import {WebsiteService, Website} from './website.service';
import {FavoritesListComponent} from './favoritesList.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.html',
  directives: [WebsiteComponent, FavoritesListComponent]
})
export class AppComponent {
  site: Website;
  isDataAvailable: boolean = false;
  // service: WebsiteService;

  constructor (private service: WebsiteService) {
    this.service = service;
}
  ngOnInit() {
    let self = this;
    this.service.getWebsites()
      .then(function(resp){
        self.site = resp[self.service.getIndex()];
        self.isDataAvailable = true;
      })
  }

  next() {
    this.service.incrementIndex();
    this.site = this.service.getCurrentSite();
  }

  love(thisSite) {  // <3 <3 <3
    this.service.saveToFavorites(thisSite);
  }

  getFavorites() {
    return this.service.getFavorites();
  }

}
