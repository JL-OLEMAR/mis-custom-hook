import { renderHook, act } from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"

describe("Pruebas en usForm", () => {
  const initialForm = {
    name: "Fernando",
    email: "fernando@gmail.com",
  }

  test("debe de retornar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [formValues, handleInputChange, reset] = result.current

    expect(formValues).toEqual(initialForm)
    expect(typeof handleInputChange).toBe("function")
    expect(typeof reset).toBe("function")
  })

  test("debe de cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange] = result.current

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Melissa",
        },
      })
    })

    const [formValues] = result.current
    // console.log({ ...initialForm, name: "Melissa" })
    expect(formValues).toEqual({ ...initialForm, name: "Melissa" })
  })

  test("debe de re-establecer el formualrio con RESET", () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange, reset] = result.current

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Melissa",
        },
      })
      reset()
    })

    const [formValues] = result.current
    // console.log(formValues)
    // console.log(initialForm)
    expect(formValues).toEqual(initialForm)
  })
})
