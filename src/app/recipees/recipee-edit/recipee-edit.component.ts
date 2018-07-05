import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeeService } from '../recipee.service';

@Component({
  selector: 'app-recipee-edit',
  templateUrl: './recipee-edit.component.html',
  styleUrls: ['./recipee-edit.component.css']
})
export class RecipeeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeeForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private recipeeService: RecipeeService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    console.log(this.recipeeForm);
  }

  onAddIngredient() {
    (<FormArray>this.recipeeForm.get('ingredients')).push(
      new FormGroup( {
        'name': new FormControl(),
        'amount': new FormControl()
      })
    );
  }

  private initForm() {

    let recipeeName = '';
    let recipeeImagePath = '';
    let recipeeDescription = '';
    let recipeeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipee = this.recipeeService.getARecipee(this.id);

      recipeeName = recipee.name;
      recipeeImagePath = recipee.imagePath;
      recipeeDescription = recipee.description;

      if (recipee['ingredient']) {
        for (let ingredient of recipee.ingredient) {
          recipeeIngredients.push(
            new FormGroup( {
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            })
          );
        }
      }
    }
    this.recipeeForm = new FormGroup( {
      'name': new FormControl(recipeeName),
      'imagePath': new FormControl(recipeeImagePath),
      'description': new FormControl(recipeeDescription),
      'ingredients': recipeeIngredients
    });
  }
}
