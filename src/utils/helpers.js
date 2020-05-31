import React from "react"
import axios from "axios"

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

export { fetchResources, renderState }
