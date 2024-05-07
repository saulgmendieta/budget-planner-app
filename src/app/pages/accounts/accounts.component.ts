import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  
  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.updateMenu(1);
  }


}