import { Component, OnInit } from "@angular/core";
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit{

  ngOnInit() {
      firebase.initializeApp(
        {apiKey: "AIzaSyAN_X3H4AId1hNck51DzPG2f8jqGmhGnLg",
        authDomain: "receipe-book-9745b.firebaseapp.com"}
      );
  }
}
