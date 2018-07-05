import { Injectable } from '@angular/core';
import { Recipee } from './recipee.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeeService {
    recipeeChanged = new Subject<Recipee[]>();
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

     addRecipee(recipee: Recipee) {
         this.recipees.push(recipee);
         this.recipeeChanged.next(this.recipees.slice());
     }

     updateRecipee(index: number, newRecipee: Recipee) {
        this.recipees[index] = newRecipee;
        this.recipeeChanged.next(this.recipees.slice());
     }

     deleteRecipee(index: number) {
         this.recipees.splice(index, 1);
         this.recipeeChanged.next(this.recipees.slice());
     }
}
