import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/Ingredient.model';
import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;

  editItemIndex: number;
  editMode = false;
  subscription: Subscription;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  this.subscription = this.shoppingListService.itemEditClick
      .subscribe(
        (index: number) => {
            this.editItemIndex = index;
            this.editMode = true;
            this.editedItem = this.shoppingListService.getIngredient(index);
            this.slForm.setValue(
              {name: this.editedItem.name, amount: this.editedItem.amount}
            )
        }
      )
  }

  onSubmit() {
    const value = this.slForm.value;
    const ingredient: Ingredient = new Ingredient(value.name, value.amount);
    if(!this.editMode)
    this.shoppingListService.addIngredient(ingredient);
    else
    this.shoppingListService.updateIngredient(this.editItemIndex, ingredient)
    this.editMode = false;
    this.slForm.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
