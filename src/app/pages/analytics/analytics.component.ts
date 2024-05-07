import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent  implements OnInit {
  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.updateMenu(3);
  }

  menuItems = this.navigationService.menuitems;

}