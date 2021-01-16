import React from "react"
import { shallow } from "enzyme"
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd"

describe("Pruebas en <TodoAdd />", () => {
  const handleAddTodo = jest.fn()
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />)

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot()
  })

  test("NO debe de llamar handleAddTodo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit")
    formSubmit({ preventDefault() {} })
    expect(handleAddTodo).toHaveBeenCalledTimes(0)
  })

  test("debe de llamar la función handleAddTodo", () => {
    const value = "Aprender React"
    wrapper.find("input").simulate("change", {
      target: {
        value,
        name: "description",
      },
    })
    const formSubmit = wrapper.find("form").prop("onSubmit")
    formSubmit({ preventDefault() {} })
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number), // ojo aqui se esta simulando el "id"
      desc: value,
      done: false,
    })

    expect(wrapper.find("input").prop("value")).toBe("")
  })
})
