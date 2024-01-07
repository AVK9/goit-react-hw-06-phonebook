import { DECCREMENT, INCREMENT } from "./types"

const initialState = {
    counter: 0,
}
export const counterReduser = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            ...state,
            counter: state.counter + action.payload,
        }
    } else if (action.type === DECCREMENT) {
        return {
            ...state,
            counter: state.counter - action.payload,
        }
    }
    return state
}