import {Component} from '@angular/core';
import {WebsiteService} from './website.service';

@Component({
  selector:    'website',
  templateUrl: 'app/templates/website.html',
  providers:   [WebsiteService]
})
export class WebsiteComponent { }
