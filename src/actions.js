import { fetchResources } from "./utils/helpers"

const ADD_TO_BASKET = "ADD_TO_BASKET"
const FETCH_PIZZA = "FETCH_PIZZA"
const FETCH_EXTRAS = "FETCH_EXTRAS"
const FETCH_SERVICES = "FETCH SERVICES"

const addToBasketAction = (payload) => {
  return {
    type: ADD_TO_BASKET,
    payload,
  }
}

const fetchPizza = () => async (dispatch) => {
  const data = await fetchResources("http://localhost:3000/pizza", "GET")
  return dispatch({
    type: FETCH_PIZZA,
    payload: data.pizza,
  })
}

const fetchExtras = () => async (dispatch) => {
  const data = await fetchResources("http://localhost:3000/extras", "GET")
  return dispatch({
    type: FETCH_EXTRAS,
    payload: data.extras,
  })
}

const fetchServices = () => async (dispatch) => {
  const data = await fetchResources("http://localhost:3000/services", "GET")
  return dispatch({
    type: FETCH_SERVICES,
    payload: data.services,
  })
}

export {
  ADD_TO_BASKET,
  FETCH_PIZZA,
  FETCH_EXTRAS,
  FETCH_SERVICES,
  addToBasketAction,
  fetchPizza,
  fetchExtras,
  fetchServices,
}
