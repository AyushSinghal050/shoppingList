import { Component, OnInit } from '@angular/core';
import { RecipeeService } from './recipee.service';
import { Recipee } from './recipee.model';

@Component({
  selector: 'app-recipees',
  templateUrl: './recipees.component.html',
  styleUrls: ['./recipees.component.css'],
  providers: [RecipeeService]
})
export class RecipeesComponent implements OnInit {
  selectedRecipee: Recipee;
  constructor(private recipeeService: RecipeeService) { }

  ngOnInit() {
    this.recipeeService.recipeeSelected
    .subscribe(
      (recipee: Recipee) => {
        this.selectedRecipee = recipee;
      }
    );
  }

}
