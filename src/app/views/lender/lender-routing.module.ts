import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositWithdrawalComponent } from './deposit-withdrawal/deposit-withdrawal.component';
import { DepositComponent } from './deposit-withdrawal/deposit/deposit.component';
import { ErrorComponent } from './deposit-withdrawal/error/error.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'sign-up-register', component: RegisterComponent },
  {
    path: 'deposit-withdrawal',
    component: DepositWithdrawalComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'deposit' },
      { path: 'deposit', component: DepositComponent },
      { path: '**', component: ErrorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LenderRoutingModule {}
