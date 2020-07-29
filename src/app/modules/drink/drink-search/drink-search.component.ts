import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-drink-search',
  templateUrl: './drink-search.component.html',
  styleUrls: ['./drink-search.component.css']
})
export class DrinkSearchComponent implements OnInit, OnDestroy {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  searchControl = new FormControl();

  unsubscribe = new Subject();

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(250))
      .subscribe(value => {
        this.search.emit(value);
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
