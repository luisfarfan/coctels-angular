import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORIES_MENU } from '../../const';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categoriesMenu = CATEGORIES_MENU;

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

}
