import { ReceipesService } from './../receipes.service';
import { Receipe } from './../receipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.sass']
})
export class ReceipeDetailComponent implements OnInit {
  receipe: Receipe;
  id: number;
  constructor(private receipesService: ReceipesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
   this.route.params.subscribe(
     (params: Params) => {
          this.id = +params["id"];
          this.receipe = this.receipesService.getReceipesById(this.id);
     }
   )
  }
  toShoppingCart(){
    this.receipesService.addIngredientsToShoppingList(this.receipe);
  }
  onEditReceipe(){
      this.router.navigate(['edit'], {relativeTo:this.route});
  }
  onDeleteReceipe() {
    this.receipesService.deleteReceipe(this.id);
    this.router.navigate(['/receipes']);
  }
}
