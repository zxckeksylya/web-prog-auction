import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:"main",component:MainPageComponent},
    {path:"catalog",component:CatalogComponent},
    {path:"**",redirectTo:"main"}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
