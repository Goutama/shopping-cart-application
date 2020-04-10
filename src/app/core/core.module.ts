import { AppRoutingModule } from "./../app-routing.module";
import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";

import { HeaderComponent } from "./../core/header/header.component";
import { HomeComponent } from "./../core/home/home.component";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { ReceipesService } from "../receipes/receipes.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, SharedModule, HeaderComponent],
  providers: [
    ShoppingListService,
    ReceipesService,
    DataStorageService,
    AuthService
  ]
})
export class CoreModule {}
