import { Ingredient } from './../shared/Ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingrdientChanged = new Subject<Ingredient[]>();
  itemEditClick = new Subject<number>();

  constructor() { }

  private ingredients: Ingredient[] = [
    new Ingredient('Peanut', 5),
    new Ingredient ('Powder', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingrdientChanged.next(this.ingredients.slice());
}

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingrdientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingrdientChanged.next(this.ingredients.slice());
  }
}
