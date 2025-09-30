import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increament, init, set } from "./counter.actions";
import { switchMap, tap, withLatestFrom, of } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selector";

@Injectable()
export class CounterEffect {
    loadCount = createEffect(() => this.actions$.pipe(
        ofType(init),
        switchMap(() => {
            const storedCounter = localStorage.getItem('count');
            if (storedCounter) {
                return of(set({ value: +storedCounter }));
            }
            return of(set({ value: 0 }));
        })
    ));

    saveCount = createEffect(() => this.actions$.pipe(
        ofType(increament, decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {
            console.log(action);
            localStorage.setItem('count', JSON.stringify(counter));
        })
    ), { dispatch: false });

    constructor(private actions$: Actions, private store: Store<{ counter: number }>) { }
}