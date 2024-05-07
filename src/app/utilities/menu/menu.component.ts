import { Component } from '@angular/core';
import { NavigationService } from 'src/app/pages/navigation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent{
  
  constructor(private navigationService: NavigationService) {
    this.menuItems = this.navigationService.menuitems;
  }

  menuItems?: any[];

}
