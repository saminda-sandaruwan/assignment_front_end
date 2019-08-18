import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from '../app/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from '../app/register/register.component'
import { ContactUsComponent } from './contact-us/contact-us.component';



const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:"login",
    component:LoginComponent
  },
   {
    path:"home",
    component:HomeComponent
  },
  {
    path: "register",
    component:RegisterComponent
  },
  {
    path: "contact",
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
