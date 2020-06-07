const ADD_TO_BASKET = "ADD_TO_BASKET"

const addToBasketAction = (payload) => {
  return {
    type: ADD_TO_BASKET,
    payload,
  }
}

export { ADD_TO_BASKET, addToBasketAction }
