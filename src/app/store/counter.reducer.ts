import { createReducer, on } from "@ngrx/store";
import { decrement, increament, set } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increament, (state, action) => state + action.value),
    on(decrement, (state, action) => state - action.value),
    on(set, (state, action) => action.value)
);

// older way without createReducer
// export function counterReducer(state = initialState) {
//     return state;
// }