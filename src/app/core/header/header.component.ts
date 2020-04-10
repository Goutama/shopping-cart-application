import { AuthService } from './../../auth/auth.service';
import { DataStorageService } from './../../shared/data-storage.service';
import { Component} from "@angular/core";
import { Response } from '@angular/http';
import { ReceipesService } from '../../receipes/receipes.service';
import { Receipe } from '../../receipes/receipe.model';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              private recepiesService: ReceipesService,
              private authService: AuthService) {}

    onSaveData() {
    this.dataStorageService.saveData()
      .subscribe((response: Response) => {
            console.log(response);
      })
  }

  onFetchData() {
    this.dataStorageService.fetchData()
    .subscribe((receipes: Receipe[]) => {
      this.recepiesService.setReceipes(receipes);
    })
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onLogOut() {
    this.authService.logOut();
  }
}
