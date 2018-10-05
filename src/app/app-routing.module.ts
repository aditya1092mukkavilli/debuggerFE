import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'register', component:RegistrationComponent},
  { path:'login', component: LoginComponent },
  { path: 'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  { path: 'project', loadChildren:'./project/project.module#ProjectModule'},
  { path: 'createuser', loadChildren:'./create-user/create-user.module#CreateUserModule'}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

 