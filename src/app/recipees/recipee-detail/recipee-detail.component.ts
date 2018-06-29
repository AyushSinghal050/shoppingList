import { Component, OnInit, Input } from '@angular/core';
import { Recipee } from '../recipee.model';

@Component({
  selector: 'app-recipee-detail',
  templateUrl: './recipee-detail.component.html',
  styleUrls: ['./recipee-detail.component.css']
})
export class RecipeeDetailComponent implements OnInit {
@Input() recipee: Recipee;
  constructor() { }

  ngOnInit() {
  }

}
