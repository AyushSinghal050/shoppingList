import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipee } from '../recipee.model';
import { RecipeeService } from '../recipee.service';

@Component({
  selector: 'app-recipee-detail',
  templateUrl: './recipee-detail.component.html',
  styleUrls: ['./recipee-detail.component.css']
})
export class RecipeeDetailComponent implements OnInit {
 recipee: Recipee;
 id: number;
  constructor(private recipeeService: RecipeeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipee = this.recipeeService.getARecipee(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeeService.addIngredientToShoppingList(this.recipee.ingredient);
  }

  onEditRecipee() {
    this.router.navigate(['edit'], {relativeTo: this.route} );
  }

}
