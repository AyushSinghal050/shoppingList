import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipee } from '../recipee.model';
import { RecipeeService } from '../recipee.service';

@Component({
  selector: 'app-recipee-list',
  templateUrl: './recipee-list.component.html',
  styleUrls: ['./recipee-list.component.css'],

})
export class RecipeeListComponent implements OnInit {

  recipees: Recipee[] ;
  constructor(private recipeeService: RecipeeService) { }

  ngOnInit() {
    this.recipees = this.recipeeService.getRecipee() ;
  }

}
