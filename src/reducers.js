import { combineReducers } from "redux"
import { ADD_TO_BASKET } from "./actions"

const initialState = []

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return [...state, action.payload]
    default:
      return state
  }
}

const combinedReducer = combineReducers({
  basket: basketReducer,
})

export default combinedReducer
