import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { AccountService } from 'src/app/accounts/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private navigationService: NavigationService,
              private accountService: AccountService) { }

  ngOnInit(): void {
    this.navigationService.updateMenu(0);
  }

  accountList = this.accountService.accountList;

  selectBox(index: number){
    var aList = this.accountList;
    for(var i = 0; i<aList.length; i++){
      aList[i].active_color="gray"
    }
    aList[index].active_color = aList[index].color
    this.hasSelected = true
    
  }

  restoreBoxes(){

    var aList = this.accountList;
      for(var i = 0; i<aList.length; i++){
      aList[i].active_color = aList[i].color
    }
    this.hasSelected = false
  }

  hasSelected: boolean = false
}