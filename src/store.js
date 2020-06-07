import { createStore, applyMiddleware, compose } from "redux"
import combinedReducer from "./reducers"
import ReduxThunk from "redux-thunk"

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const thunk = applyMiddleware(ReduxThunk)

const enhancer = compose(thunk, reduxDevTools)

const store = createStore(combinedReducer, enhancer)

export default store
