import { createReducer, on } from "@ngrx/store";
import { increament } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increament, (state, action) => state + action.value)
);

// older way without createReducer
// export function counterReducer(state = initialState) {
//     return state;
// }