import {Component, Input} from '@angular/core';
import {WebsiteService, Website} from './website.service';

@Component({
  selector:    'favorites-list',
  templateUrl: 'app/templates/favorites-list.html'
})
export class FavoritesListComponent {
  @Input()
  favsites: Array<Website>;

  constructor (private service: WebsiteService) {
    this.service = service;
  }
}
