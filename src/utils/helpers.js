import React from "react"
import axios from "axios"
import Button from "@material-ui/core/Button"

const fetchResources = (url, method) => {
  const axiosOptions = {
    url: url,
    method: method,
  }

  return axios(axiosOptions)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
}

const renderButton = (addToBasket, item) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => addToBasket(item)}
    >
      Add To Basket
    </Button>
  )
}

const renderState = (array, renderButton, addToBasket) => {
  const updState = array.map((item, i) => {
    return (
      <div key={i}>
        {item.name} {item.price} {renderButton(addToBasket, item)}
      </div>
    )
  })
  return updState
}

export { fetchResources, renderState, renderButton }
