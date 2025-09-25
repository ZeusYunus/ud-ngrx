import { createReducer, on } from "@ngrx/store";
import { increament } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increament, (state) => state + 1)
);

// older way without createReducer
// export function counterReducer(state = initialState) {
//     return state;
// }