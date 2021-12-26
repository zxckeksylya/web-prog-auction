import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProdCardComponent } from './prod-card/prod-card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:"main",component:MainPageComponent},
    {path:"catalog",component:CatalogComponent},
    {path:"prod-card",component:ProdCardComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"profile",component:ProfileComponent},
    {path:"**",redirectTo:"main"}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
