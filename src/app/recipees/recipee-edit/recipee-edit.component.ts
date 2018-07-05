import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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
              private recipeeService: RecipeeService,
              private router: Router) { }

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
    if (this.editMode) {
      this.recipeeService.updateRecipee(this.id, this.recipeeForm.value);
    } else {
      this.recipeeService.addRecipee(this.recipeeForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeeForm.get('ingredients')).push(
      new FormGroup( {
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
console.log(this.recipeeForm.get('ingredients'));
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeeForm.get('ingredients')).removeAt(index);
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
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            } )
          );
        }
      }
    }
    this.recipeeForm = new FormGroup( {
      'name': new FormControl(recipeeName, Validators.required),
      'imagePath': new FormControl(recipeeImagePath, Validators.required),
      'description': new FormControl(recipeeDescription, Validators.required),
      'ingredients': recipeeIngredients
    });
  }
}
