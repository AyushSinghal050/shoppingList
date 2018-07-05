import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipee } from '../recipee.model';
import { RecipeeService } from '../recipee.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipee-list',
  templateUrl: './recipee-list.component.html',
  styleUrls: ['./recipee-list.component.css'],

})
export class RecipeeListComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  recipees: Recipee[] ;
  constructor(private recipeeService: RecipeeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipees = this.recipeeService.getRecipee() ;
    this.subscription = this.recipeeService.recipeeChanged
    .subscribe(
      (recipees: Recipee[]) => {
        this.recipees = recipees;
      }
    );
  }

  onNewRecipee() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
