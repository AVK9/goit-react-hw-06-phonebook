import { DECCREMENT, INCREMENT } from "./types"

export const addCounterActions = (number) => {
    return {type: INCREMENT, payload: number}
}
export const decrementCounterActions = (number) => {
    return {type: DECCREMENT, payload: number}
}