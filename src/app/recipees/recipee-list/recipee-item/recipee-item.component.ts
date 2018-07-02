import { Component, OnInit, Input } from '@angular/core';
import { Recipee } from '../../recipee.model';
import { RecipeeService } from '../../recipee.service';

@Component({
  selector: 'app-recipee-item',
  templateUrl: './recipee-item.component.html',
  styleUrls: ['./recipee-item.component.css']
})
export class RecipeeItemComponent implements OnInit {
  @Input() recipee: Recipee;

  constructor(private recipeeService: RecipeeService) { }

  ngOnInit() {
  }
  recipeeSelect() {
    this.recipeeService.recipeeSelected.emit(this.recipee);
  }

}
