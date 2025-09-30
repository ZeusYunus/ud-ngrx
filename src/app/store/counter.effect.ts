import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increament } from "./counter.actions";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class CounterEffect {
    saveCount = createEffect(() => this.actions$.pipe(
        ofType(increament, decrement),
        tap((action) => {
            console.log(action);
            // persist only the numeric value to localStorage
            // action has the shape { value: number, type: string }
            localStorage.setItem('count', JSON.stringify(action.value));
        })
    ), { dispatch: false });

    constructor(private actions$: Actions) { }
}