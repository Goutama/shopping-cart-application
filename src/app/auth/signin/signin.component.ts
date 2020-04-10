import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.sass"]
})
export class SigninComponent implements OnInit {
 email = "test@test.com";
 password = '123456';

  constructor(private authService: AuthService) {}

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.authService.signinUser(form.value.email, form.value.password);
  }
}
