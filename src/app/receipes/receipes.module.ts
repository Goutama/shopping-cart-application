import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";

import { ReceipesComponent } from "./receipes.component";
import { ReceipeListComponent } from "./receipe-list/receipe-list.component";
import { ReceipeDetailComponent } from "./receipe-detail/receipe-detail.component";
import { ReceiptItemComponent } from "./receipe-list/receipt-item/receipt-item.component";
import { ReceipeStartComponent } from "./receipe-start/receipe-start.component";
import { ReceipeEditComponent } from "./receipe-edit/receipe-edit.component";
import { CommonModule } from "@angular/common";
import { RecepiesRoutingModule } from './receipes-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule(
  {
    declarations:[
      ReceipesComponent,
      ReceipeListComponent,
      ReceipeDetailComponent,
      ReceiptItemComponent,
      ReceipeStartComponent,
      ReceipeEditComponent,
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      RecepiesRoutingModule,
      SharedModule
    ]
  }
)
export class ReceipesModule {}
