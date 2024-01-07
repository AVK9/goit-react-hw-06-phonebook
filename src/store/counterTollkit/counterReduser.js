// import { createReducer } from "@reduxjs/toolkit"
// import { DECCREMENT, INCREMENT } from "./types"
// import { addCounterActions, decrementCounterActions } from "./actions"

// const initialState = {
//     counter: 0,
// }
// // export const counterReduser = (state = initialState, action) => {
// //     if (action.type === INCREMENT) {
// //         return {
// //             ...state,
// //             counter: state.counter + action.payload,
// //         }
// //     } else if (action.type === DECCREMENT) {
// //         return {
// //             ...state,
// //             counter: state.counter - action.payload,
// //         }
// //     }
// //     return state
// // }

// export const counterReduser = createReducer(initialState, (builder) => {
//     builder
//         .addCase(addCounterActions, (state, action) => {
//         return {
//             ...state,
//             counter: state.counter + action.payload,
//         }
//         })
//             .addCase(decrementCounterActions, (state, action) => {
//         return {
//             ...state,
//             counter: state.counter - action.payload,
//         }
//     })
// })