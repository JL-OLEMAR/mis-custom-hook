import React from "react"
import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import { useCounter } from "../../../hooks/useCounter"
import { useFetch } from "../../../hooks/useFetch"

/* jest.mock() provee informacion del hook (useCounter,useFetch) 
con simulación de información falsa para usar el hook */
jest.mock("../../../hooks/useFetch")
jest.mock("../../../hooks/useCounter")

describe("Pruebas en <MultipleCustomHooks />", () => {
  test("debe de mostrarse correctamente", () => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    })

    /* data por defecto del useFetch */
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    })
    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper).toMatchSnapshot()
  })

  test("debe de mostrar la información", () => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    })
    /* data por defecto del useFetch */
    useFetch.mockReturnValue({
      data: [
        {
          author: "Fernando",
          quote: "Hola Mundo",
        },
      ],
      loading: false,
      error: null,
    })

    const wrapper = shallow(<MultipleCustomHooks />)
    // console.log(wrapper.html);

    /* Busquedas por la clase de un elemento del html */
    expect(wrapper.find(".alert").exists()).toBe(false)
    expect(wrapper.find(".blockquote-footer").text().trim()).toBe("Fernando")

    /* Busqueda por un elemento del html */
    expect(wrapper.find("footer").text().trim()).toBe("Fernando")
  })
})
