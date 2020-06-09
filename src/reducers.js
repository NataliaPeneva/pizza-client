import { combineReducers } from "redux"
import { ADD_TO_BASKET, FETCH_PIZZA, FETCH_EXTRAS, FETCH_SERVICES, AUTH_REGISTER } from "./actions"

const initialBasketState = []

const basketReducer = (state = initialBasketState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return [...state, action.payload]
    default:
      return state
  }
}

const initialPizzaState = []

const pizzaReducer = (state = initialPizzaState, action) => {
  switch (action.type) {
    case FETCH_PIZZA:
      return [...state, ...action.payload]
    default:
      return state
  }
}

const initialExtrasState = []

const extrasReducer = (state = initialExtrasState, action) => {
  switch (action.type) {
    case FETCH_EXTRAS:
      return [...state, ...action.payload]
    default:
      return state
  }
}

const initialServicesState = []

const servicesReducer = (state = initialServicesState, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return [...state, ...action.payload]
    default:
      return state
  }
}

const initialAuthState = {}

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case AUTH_REGISTER:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const combinedReducer = combineReducers({
  basket: basketReducer,
  pizza: pizzaReducer,
  extras: extrasReducer,
  services: servicesReducer,
  auth: authReducer,
})

export default combinedReducer
