import { createAction, props } from "@ngrx/store";

export const increament = createAction(
    '[Counter] Increment',
    props<{value: number}>()
);

export const decrement = createAction(
    '[Counter] Decrement',
    props<{value: number}>()
);