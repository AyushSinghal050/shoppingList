import { Component, OnInit, Input } from '@angular/core';
import { Recipee } from '../../recipee.model';

@Component({
  selector: 'app-recipee-item',
  templateUrl: './recipee-item.component.html',
  styleUrls: ['./recipee-item.component.css']
})
export class RecipeeItemComponent implements OnInit {
  @Input() recipee: Recipee;
  @Input() index: Number;

  ngOnInit() {
  }

}
