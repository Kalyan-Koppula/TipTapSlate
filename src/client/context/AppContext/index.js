import { createContext } from "react";

export const AppContext = createContext(null);
export const AppContextDispatch = createContext(null);

export const actions = {
    ADD: 'add',
    EDIT: 'edit',
    DEL: 'delete',
    DONE: 'done',
    PROGRESS: 'progress',
};

export const appReducer = (state, action) => {
    //action = {type:any from actions obj,payload:''}
    switch (action.type) {
        case actions.ADD:
            return [...state, { id: state.length+1, todo: action.payload, done: false }];
        case actions.EDIT:
            return state.map(item => ( item.id === action.payload.id ? { ...item, todo: action.payload.todo } : item ));
        case actions.DEL:
            return state.filter(item => item.id !== action.payload.id);
        case actions.DONE:
            return state.map(item => ( item.id === action.payload.id ? { ...item, done: true } : item ))
        case actions.PROGRESS:
            return state.map(item => ( item.id === action.payload.id ? { ...item, done: false } : item ))
        default:
            return state;
    }

}

export const initialTasks = [{ id: 1, todo: 'Todo 1', done: false }, { id: 2, todo: 'Todo 2', done: true }];
