import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/Ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Receipe } from './receipe.model';

@Injectable()
export class ReceipesService {

  receipeChanged = new Subject<Receipe[]>();

  constructor(private shoppingListService: ShoppingListService) { }

  // tslint:disable-next-line:max-line-length
  private receipes: Receipe[] = [
    new Receipe(
      "Chitrana",
      "This is south karnataka food",
      "assets/images/chitrana.jpg",
      [new Ingredient ('Rice', 3),new Ingredient ('Leamon', 2)]
    ),
    // tslint:disable-next-line:max-line-length
    new Receipe(
      "Jolada Roti",
      "This is north karnataka food",
      "assets/images/jolada_rotti.jpg",
      [new Ingredient ('Rice', 2),new Ingredient ('Leamon', 5)]
    )
  ];

  getReceipes(){
    return this.receipes.slice();
  }

  getReceipesById(id: number){
    return this.receipes[id];
  }

  addIngredientsToShoppingList(receipe: Receipe){
    receipe.ingredients.forEach(
      ingredient => this.shoppingListService.addIngredient(ingredient)
    );
  }

  setReceipes(receipes: Receipe[]) {
    this.receipes = receipes;
    this.receipeChanged.next(this.receipes.slice());
  }
  addReceipe(newReceipe: Receipe) {
    this.receipes.push(newReceipe);
    this.receipeChanged.next(this.receipes.slice());
  }

  updateReceipe(index: number, newReceipe: Receipe) {
    this.receipes[index] = newReceipe;
    this.receipeChanged.next(this.receipes.slice());
  }

  deleteReceipe(index: number) {
    this.receipes.splice(index, 1);
    this.receipeChanged.next(this.receipes.slice());
  }
}
