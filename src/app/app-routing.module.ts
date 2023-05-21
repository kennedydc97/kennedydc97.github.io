import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { AdminsPageComponent } from './components/admins-page/admins-page.component';

const routes: Routes = [
  {path: '', component: UsersPageComponent}
  , {path: 'Admin', component: AdminsPageComponent}
  , {path: 'Login', component: AdminsPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , RouterModule.forRoot(routes, {})
  ]
  , exports: [RouterModule]
})
export class AppRoutingModule { }
