import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./core/home/home.component";

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent },
  {
    path: "receipes",
    loadChildren: "./receipes/receipes.module#ReceipesModule"
  },
  {
    path: "shopping-list",
    loadChildren: "./shopping-list/shopping-list.module#ShoppingListModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
