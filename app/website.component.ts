import {Component, Input} from '@angular/core';
import {Website} from './website.service';

@Component({
  selector:    'website',
  templateUrl: 'app/templates/website.html'
})
export class WebsiteComponent {
  @Input()
  mysite: Website;
}
