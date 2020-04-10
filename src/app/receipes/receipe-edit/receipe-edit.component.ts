import { ReceipesService } from "./../receipes.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators
} from "@angular/forms";
import { stringify } from "@angular/core/src/render3/util";

@Component({
  selector: "app-receipe-edit",
  templateUrl: "./receipe-edit.component.html",
  styleUrls: ["./receipe-edit.component.sass"]
})
export class ReceipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  receipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private receipesService: ReceipesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }

  initForm() {
    let name: string;
    let imagePath: string;
    let description: string;
    let ingredients = new FormArray([]);

    if (this.editMode) {
      let receipe = this.receipesService.getReceipesById(this.id);
      name = receipe.name;
      imagePath = receipe.imagePath;
      description = receipe.description;
      if (receipe["ingredients"]) {
        for (let ingredient of receipe.ingredients) {
          ingredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern("^[1-9]+[0-9]*$")
              ])
            })
          );
        }
      }
    }
    this.receipeForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: ingredients
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.receipesService.updateReceipe(this.id, this.receipeForm.value);
    } else {
      this.receipesService.addReceipe(this.receipeForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(["../"], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.receipeForm.get('ingredients')).removeAt(index);
  }

  addIngredient() {
    (<FormArray>this.receipeForm.get("ingredients")).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern("^[1-9]+[0-9]*$")
        ])
      })
    );
  }

  getFormIngredients() {
    return <FormArray>this.receipeForm.get('ingredients');
    }
}

