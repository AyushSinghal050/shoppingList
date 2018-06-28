import { Component, OnInit } from '@angular/core';
import { Recipee } from '../recipee.model';
@Component({
  selector: 'app-recipee-list',
  templateUrl: './recipee-list.component.html',
  styleUrls: ['./recipee-list.component.css']
})
export class RecipeeListComponent implements OnInit {
  recipees: Recipee[] = [
     new Recipee ('AbcName', 'Desc- Testing', 'C:\Users\ayusingh1\Desktop\angular\shopping\src\assets\recipee.jpg'),
     new Recipee ('AbcName', 'Desc- Testing', 'C:\Users\ayusingh1\Downloads\recipee.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
