import { Component, Input, OnInit } from '@angular/core';
import { DrinkDetailSimple } from '../../../shared/interfaces/drink.interface';

@Component({
  selector: 'app-drink-simple-detail',
  templateUrl: './drink-simple-detail.component.html',
  styleUrls: ['./drink-simple-detail.component.css']
})
export class DrinkSimpleDetailComponent implements OnInit {
  @Input() drink: DrinkDetailSimple;

  constructor() {
  }

  ngOnInit(): void {
  }

}
