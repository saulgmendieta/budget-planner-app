import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  
  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.updateMenu(2);
  }

}