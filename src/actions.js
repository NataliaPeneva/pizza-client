import { fetchResources } from "./utils/helpers"

const ADD_TO_BASKET = "ADD_TO_BASKET"
const FETCH_PIZZA = "FETCH_PIZZA"
const FETCH_EXTRAS = "FETCH_EXTRAS"
const FETCH_SERVICES = "FETCH SERVICES"
const AUTH_REGISTER = "AUTH REGISTER"
const AUTH_LOGIN = "AUTH LOGIN"

const addToBasketAction = (payload) => {
  return {
    type: ADD_TO_BASKET,
    payload,
  }
}

const fetchPizza = () => async (dispatch, getState) => {
  const state = getState()
  const auth = state.auth
  const token = auth.token || ""

  const data = await fetchResources("http://localhost:3000/order/pizza", "GET", { token })
  return dispatch({
    type: FETCH_PIZZA,
    payload: data.pizza,
  })
}

const fetchExtras = () => async (dispatch, getState) => {
  const state = getState()
  const auth = state.auth
  const token = auth.token || ""

  const data = await fetchResources("http://localhost:3000/order/extras", "GET", { token })
  return dispatch({
    type: FETCH_EXTRAS,
    payload: data.extras,
  })
}

const fetchServices = () => async (dispatch, getState) => {
  const state = getState()
  const auth = state.auth
  const token = auth.token || ""

  const data = await fetchResources("http://localhost:3000/order/services", "GET", { token })
  return dispatch({
    type: FETCH_SERVICES,
    payload: data.services,
  })
}

const authRegisterAction = (registerData) => async (dispatch) => {
  const data = await fetchResources("http://localhost:3000/auth/register", "POST", {
    data: registerData,
  })

  return dispatch({
    type: AUTH_REGISTER,
    payload: data,
  })
}

const authLoginAction = (loginData) => async (dispatch) => {
  const data = await fetchResources("http://localhost:3000/auth/login", "POST", { data: loginData })

  return dispatch({
    type: AUTH_LOGIN,
    payload: data,
  })
}

export {
  ADD_TO_BASKET,
  FETCH_PIZZA,
  FETCH_EXTRAS,
  FETCH_SERVICES,
  AUTH_REGISTER,
  AUTH_LOGIN,
  addToBasketAction,
  fetchPizza,
  fetchExtras,
  fetchServices,
  authRegisterAction,
  authLoginAction,
}
