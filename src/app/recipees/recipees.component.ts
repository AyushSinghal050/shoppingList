import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipees',
  templateUrl: './recipees.component.html',
  styleUrls: ['./recipees.component.css']
})
export class RecipeesComponent implements OnInit {
  recipeeSelected = '';
  constructor() { }

  ngOnInit() {
  }

}
