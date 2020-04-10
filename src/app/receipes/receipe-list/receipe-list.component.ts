import { Component, OnInit, Output, EventEmitter, OnDestroy } from "@angular/core";
import { Receipe } from "../receipe.model";
import { ReceipesService } from "../receipes.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-receipe-list",
  templateUrl: "./receipe-list.component.html",
  styleUrls: ["./receipe-list.component.sass"]
})
export class ReceipeListComponent implements OnInit, OnDestroy {

  receipes: Receipe[];
  subscription: Subscription;

  constructor(private receipesService: ReceipesService,
    private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.receipesService.receipeChanged
      .subscribe((receipes: Receipe[]) => {
          this.receipes = receipes;
      })
    this.receipes = this.receipesService.getReceipes();
  }

  onCreateReceipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
