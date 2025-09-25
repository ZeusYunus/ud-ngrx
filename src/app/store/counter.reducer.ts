import { createReducer } from "@ngrx/store";

const initialState = 0;

// export const counterReducer = createReducer(
//     initialState
// );


// older way without createReducer
export function counterReducer(state = initialState) {
    return state;
}