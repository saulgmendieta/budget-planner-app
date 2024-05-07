import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RecordsComponent } from './records/records.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
  {path:'wallet', component: PagesComponent,
    children:[
      {path:'dashboard', component: DashboardComponent},
      {path:'accounts', component: AccountsComponent},
      {path:'records', component: RecordsComponent},
      {path:'analytics', component: AnalyticsComponent},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
