import { Component, OnInit, Input } from '@angular/core';
import { Recipee } from '../recipee.model';
import { RecipeeService } from '../recipee.service';

@Component({
  selector: 'app-recipee-detail',
  templateUrl: './recipee-detail.component.html',
  styleUrls: ['./recipee-detail.component.css']
})
export class RecipeeDetailComponent implements OnInit {
@Input() recipee: Recipee;
  constructor(private recipeeService: RecipeeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeeService.addIngredientToShoppingList(this.recipee.ingredient);
  }

}
