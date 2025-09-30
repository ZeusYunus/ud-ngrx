import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increament } from "./counter.actions";
import { tap, withLatestFrom } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selector";

@Injectable()
export class CounterEffect {
    saveCount = createEffect(() => this.actions$.pipe(
        ofType(increament, decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {
            console.log(action);
            localStorage.setItem('count', JSON.stringify(counter));
        })
    ), { dispatch: false });

    constructor(private actions$: Actions, private store: Store<{counter: number}>) { }
}