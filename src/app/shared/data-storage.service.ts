import { AuthService } from './../auth/auth.service';
import { ReceipesService } from "./../receipes/receipes.service";
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Receipe } from "../receipes/receipe.model";

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private receipesService: ReceipesService,
              private authService: AuthService) {}

  saveData() {
    let token = this.authService.getToken();
    return this.http.put(
      "https://receipe-book-9745b.firebaseio.com/receipes.json?auth=" + token,
      this.receipesService.getReceipes()
    );
  }

  fetchData() {
    let token = this.authService.getToken();
    return this.http.get("https://receipe-book-9745b.firebaseio.com/receipes.json?auth=" + token)
    .pipe(
      map((response) => {
          let receipes: Receipe[] = response.json();
          for(let receipe of receipes){
            if(!receipe['ingredients']){
              receipe['ingredients'] = [];
            }
          }
          return receipes;
    }));
  }
}
