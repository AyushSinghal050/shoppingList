import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipee } from '../../recipee.model';

@Component({
  selector: 'app-recipee-item',
  templateUrl: './recipee-item.component.html',
  styleUrls: ['./recipee-item.component.css']
})
export class RecipeeItemComponent implements OnInit {
  @Input() recipee: Recipee;
  @Output() recipeeSelected = new EventEmitter<void> ();
  constructor() { }

  ngOnInit() {
  }
  recipeeSelect() {
    this.recipeeSelected.emit();
  }

}
