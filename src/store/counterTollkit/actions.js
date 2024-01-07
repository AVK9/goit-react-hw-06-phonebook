import { createAction } from "@reduxjs/toolkit"

// export const addCounterActions = (number) => {
//     return {type: INCREMENT, payload: number}
// }
// export const decrementCounterActions = (number) => {
//     return {type: DECCREMENT, payload: number}
// }

export const addCounterActions = createAction('caunter/increment')
export const decrementCounterActions = createAction('caunter/decrement')