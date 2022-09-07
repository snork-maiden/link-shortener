import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthorizedGuard } from './authorized.guard';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'auth',
        component: AuthorizationComponent,
      },
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthorizedGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
