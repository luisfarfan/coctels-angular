import { Component, Input, OnInit } from '@angular/core';
import { DrinkDetailSimpleList } from '../../../shared/interfaces/drink.interface';

@Component({
  selector: 'app-drink-simple-detail-list',
  templateUrl: './drink-simple-detail-list.component.html',
  styleUrls: ['./drink-simple-detail-list.component.scss']
})
export class DrinkSimpleDetailListComponent implements OnInit {
  @Input() drinksSimple: DrinkDetailSimpleList;

  constructor() {
  }

  ngOnInit(): void {
  }

}
