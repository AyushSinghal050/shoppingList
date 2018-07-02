import { EventEmitter, Injectable } from '@angular/core';
import { Recipee } from './recipee.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeeService {
    recipeeSelected = new EventEmitter<Recipee> ();

    private recipees: Recipee[] = [
        new Recipee ('AbcName',
                     'Desc- Testing',
                     'C:\Users\ayusingh1\Desktop\angular\shopping\src\assets\recipee.jpg',
                     [new Ingredient('Mango', 1), new Ingredient('Banana', 2)]),

        new Recipee ('AbcName2',
                     'Desc- Testing',
                     'C:\Users\ayusingh1\Downloads\recipee.jpg,',
                     [new Ingredient('Potato', 3), new Ingredient('Tomato', 5)])
     ];

     constructor(private slService: ShoppingListService) {
     }
     getRecipee() {
         return this.recipees.slice() ;
     }

     addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
     }
}
