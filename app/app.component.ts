import {Component} from '@angular/core';
import {WebsiteComponent} from './website.component';

@Component({
  selector: 'my-app',
  template: '<h1> TwoMuch Decision App - AngularAttack 2016</h1><website></website>',
  directives: [WebsiteComponent]
})
export class AppComponent {}
