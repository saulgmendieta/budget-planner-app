import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { AccountService } from 'src/app/accounts/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  
  constructor(private navigationService: NavigationService,
              private accountService: AccountService) { }

  accountList = this.accountService.accountList;
  
  ngOnInit(): void {
    this.navigationService.updateMenu(1);
  }


}