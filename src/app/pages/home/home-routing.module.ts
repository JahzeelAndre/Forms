import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
      {
        path: '**',
        redirectTo: 'checkout'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
