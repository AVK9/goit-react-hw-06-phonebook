import { createReducer } from "@reduxjs/toolkit"
import { addTodoAction, removeTodoAction, updateTodoAction } from "./actions"

const initialState = {
    todo: [],
}

export const todoReduser = createReducer(initialState, (builder) => {
    builder
        .addCase(addTodoAction, (state, action) => {
            // return {
            //     ...state,
            //     todo: [...state, action.payload]
            // }
            state.todo.push(action.payload)
         })
        .addCase(removeTodoAction, (state, { payload }) => {
            state.todo = state.todo.filter((el)=>el.id !== payload)
         })
        .addCase(updateTodoAction, (state, { payload }) => {
            state.todo = state.todo.map((el) =>
                el.id === payload ? { ...el, completed: !el.completed } : el)
    })
})