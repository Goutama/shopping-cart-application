import { AuthRoutingModule } from "./auth-routing.module";
import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule } from "@angular/forms";
import { AuthGuardService } from "./auth-guard.service";

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [FormsModule, AuthRoutingModule],
  providers: [AuthGuardService]
})
export class AuthModule {}
