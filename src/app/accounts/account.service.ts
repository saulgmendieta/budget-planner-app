import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accountList = [
    {
      name: "Fixed Budget",
      balance: 500,
      color: 'green',
      currency: 'USD',
      
    },    
    {
      name: "Savings Budget",
      balance: 200,
      color: 'blue',
      currency: 'USD'
    },
    {
      name: "Expenses Budget",
      balance: 300,
      color: 'red',
      currency: 'USD'
    }
  ]
}
