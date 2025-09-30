import { createAction, props } from "@ngrx/store";

export const increament = createAction(
    '[Counter] Increment',
    props<{value: number}>()
);