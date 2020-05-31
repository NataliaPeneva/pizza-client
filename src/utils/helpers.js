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

// 5. refactorirai renderState funkciqta, taka che da priema
//  2ri parameter (koito shte e func 1).
// posle dokato map-vash prez vseki item,
// dobavi renderButton funkciqta tochno do cenata i
// q invokirai kato pass-nesh item-a v neq.

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
