import { Routes, RouterModule } from "@angular/router";
import { ReceipesComponent } from "./receipes.component";
import { ReceipeStartComponent } from "./receipe-start/receipe-start.component";
import { ReceipeEditComponent } from "./receipe-edit/receipe-edit.component";
import { AuthGuardService } from "../auth/auth-guard.service";
import { ReceipeDetailComponent } from "./receipe-detail/receipe-detail.component";
import { NgModule } from "@angular/core";

const receipesRoutes: Routes = [
  {path: '', component: ReceipesComponent, children: [
    { path: '', component: ReceipeStartComponent },
    { path: 'new', component: ReceipeEditComponent, canActivate: [AuthGuardService]},
    { path: ":id", component: ReceipeDetailComponent },
    { path: ":id/edit", component: ReceipeEditComponent, canActivate: [AuthGuardService]}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(receipesRoutes)],
  exports: [RouterModule]
})
export class RecepiesRoutingModule {}
