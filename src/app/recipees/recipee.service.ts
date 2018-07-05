import { Injectable } from '@angular/core';
import { Recipee } from './recipee.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeeService {

    private recipees: Recipee[] = [
        new Recipee ('AbcName',
                     'Desc- Testing',
                     '../../assets/img/recipee.jpg',
                     [new Ingredient('Mango', 1), new Ingredient('Banana', 2)]),

        new Recipee ('AbcName2',
                     'Desc- Testing',
                     '../../assets/img/potato.jpg',
                     [new Ingredient('Potato', 3), new Ingredient('Tomato', 5)])
     ];

     constructor(private slService: ShoppingListService) {
     }
     getRecipee() {
         return this.recipees.slice() ;
     }

     getARecipee(index: number) {
         return this.recipees[index];
     }

     addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
     }
}
