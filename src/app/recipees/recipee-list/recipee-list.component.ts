import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipee } from '../recipee.model';
import { RecipeeService } from '../recipee.service';


@Component({
  selector: 'app-recipee-list',
  templateUrl: './recipee-list.component.html',
  styleUrls: ['./recipee-list.component.css'],

})
export class RecipeeListComponent implements OnInit {

  recipees: Recipee[] ;
  constructor(private recipeeService: RecipeeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipees = this.recipeeService.getRecipee() ;
  }

  onNewRecipee() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
