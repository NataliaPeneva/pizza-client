import { createStore } from "redux"
import combinedReducer from "./reducers"

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(combinedReducer, enhancer)

export default store
