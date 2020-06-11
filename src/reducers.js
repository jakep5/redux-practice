import { combineReducers } from 'redux';

import {SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO, VisibilityFilters} from './actions';


const initialState = {
    visibilityFilters: VisibilityFilters.SHOW_ALL,
    todos: []
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            })
        default:
            return state
    }
}

export default todoApp;