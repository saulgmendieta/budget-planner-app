import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  menuitems = [
    {
      name: "Dashboard",
      link: "dashboard",
      class: "menu-item"
    },
    {
      name: "Accounts",
      link: "accounts",
      class: "menu-item"
    },
    {
      name: "Records",
      link: "records",
      class: "menu-item"
    },
    {
      name: "Analytics",
      link: "analytics",
      class: "menu-item"
    },
  ]

  $changeEmitter = new EventEmitter();
  updateMenu (index: number){
    
    for(var i=0; i< this.menuitems.length; i++){
      this.menuitems[i].class = "menu-item";
    }
    if(0 <= index && index < this.menuitems.length){
      this.menuitems[index].class += " active-item";
      this.$changeEmitter.emit(index)
    }

  }
}
