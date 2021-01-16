import React, { memo } from "react"

// export const Small = memo(({ value }) => {
//   console.log("Me volví ha llamar :( ")
//   return <small>{value}</small>
// })

export const Small = ({ value }) => {
  console.log("Me volví ha llamar :( ")
  return <small>{value}</small>
}
