import { CommonModule } from "@angular/common";
import { DropDownDirective } from "./dropdown.directive";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DropDownDirective],
  exports: [CommonModule, DropDownDirective]
})
export class SharedModule {}
