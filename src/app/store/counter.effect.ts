import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increament } from "./counter.actions";
import { tap } from "rxjs";

export class CounterEffect {
    saveCount = createEffect(() => this.actions$.pipe(
        ofType(increament, decrement),
        tap((action) => {
            console.log(action);
            localStorage.setItem('count', JSON.stringify(action));
        })
    ), { dispatch: false });

    constructor(private actions$: Actions) { }
}