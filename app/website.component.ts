import {Component} from '@angular/core';
import {WebsiteService} from './website.service';

@Component({
  selector:    'website',
  templateUrl: 'app/website.html',
  providers:   [WebsiteService]
})
export class WebsiteComponent { }
