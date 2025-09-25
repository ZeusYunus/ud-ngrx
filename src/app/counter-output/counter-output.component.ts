import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';


@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe]
})
export class CounterOutputComponent {
  count$: Observable<number>;

  constructor(private store: Store<{counter: number}>) {
    this.count$ = store.select('counter');
  }

}
