import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkFullDetail } from '../../shared/interfaces/drink.interface';
import { DrinkService } from '../../shared/services/drink.service';
import to from 'await-to-js';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-drink-page',
  templateUrl: './drink-page.component.html',
  styleUrls: ['./drink-page.component.css']
})
export class DrinkPageComponent implements OnInit, OnDestroy {
  drink: DrinkFullDetail;
  unsubscribe = new Subject();

  constructor(private route: ActivatedRoute, private drinkService: DrinkService) {
    this.route.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(params => {
        this.getDrink(params.id);
      });
  }

  ngOnInit(): void {
  }

  async getDrink(id): Promise<void> {
    const [error, drink] = await to(this.drinkService.get(id).toPromise());
    this.drink = drink;
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
