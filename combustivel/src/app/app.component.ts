import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private headerService: HeaderService) { }

  isMenuOpen = true;
  contentMargin = 240;



  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }

  task: string[] = [
    'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  ]

}
