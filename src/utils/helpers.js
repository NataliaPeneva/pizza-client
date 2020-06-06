import React from "react"
import axios from "axios"
import Button from "@material-ui/core/Button"
import { FormHelperText } from "@material-ui/core"

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
      variant="outlined"
      style={{ backgroundColor: "#0b3954", border: "1.5px solid #80ed99", color: "#80ed99" }}
      size="small"
      onClick={() => addToBasket(item)}
    >
      Add To Basket
    </Button>
  )
}

const renderState = (array, renderButton, addToBasket) => {
  const updState = array.map((item, i) => {
    return (
      <div key={i} style={{ display: "flex" }}>
        <div style={{ marginRight: 30 }}>
          {item.name} &nbsp; €{item.price}
        </div>
        <div>{renderButton(addToBasket, item)}</div>
      </div>
    )
  })
  return updState
}

export { fetchResources, renderState, renderButton }
