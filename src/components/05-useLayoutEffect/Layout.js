import React, { useLayoutEffect, useRef, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { useCounter } from "../../hooks/useCounter"

import "./layout.css"

export const Layout = () => {
  const { counter, increment } = useCounter(1)

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  )

  /* !!data === (doble negación) === false
                    ó
    if (data){muestra} else {undefined == no mostrar} */
  const { quote } = !!data && data[0]

  const pTag = useRef()
  const [boxSize, setstate] = useState({})

  useLayoutEffect(() => {
    setstate(pTag.current.getBoundingClientRect())
  }, [quote])

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-prueba">
        <p ref={pTag}> {quote} </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className="btn btn-primary" onClick={increment}>
        Siguiente quote
      </button>
    </div>
  )
}
