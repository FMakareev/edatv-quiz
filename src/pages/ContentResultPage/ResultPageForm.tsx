import React, { useState } from "react"
import useForm from "react-hook-form"

/** View */
import Button from "../../components/Button"
import Input from "../../components/Input"

const styles = {
  classesLabel: "result-form__label",
  type: "text",
  classesInput: "result-form__input",
  classesText: "result-form__validate",
  // classesTextError: "result-form__validate-error",
}

interface FormValue {
  emailAddress: string //
  entry: {
    10457377: string // фио
    2087744403: string // телефон
    40037458: string // Номер приставки
    405545350: string // Город
  }

  [prop: string]: any
}

const GoogleFormEndpoint: string =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfFWgfIIwndw8Vj1UWWXroG19Kb5woYliF8XRZHOmpACK8blg/formResponse"

const ResultPageForm = () => {
  const [error, setError] = useState("")
  const [text, setText] = useState("Обязательно для заполнения")

  const { register, errors, getValues } = useForm<FormValue>()

  return (
    <form
      className={"result-form"}
      target="_self"
      method="POST"
      action={GoogleFormEndpoint}
      onSubmit={(event: any) => {
        const formValue = getValues()
        const errors = []

        if (!formValue["entry.10457377"]) {
          errors.push({ "entry.10457377": "Обязательно для заполнения" })
          setError("entry.10457377")
          setText("Обязательно для заполнения")
        }
        if (!formValue["entry.2087744403"]) {
          errors.push({ "entry.2087744403": "Обязательно для заполнения" })
          setError("entry.2087744403")
          setText("Обязательно для заполнения")
        }

        if (!formValue["emailAddress"]) {
          errors.push({ emailAddress: "Обязательно для заполнения" })
          setError("emailAddress")
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
            formValue["emailAddress"]
          )
        ) {
          errors.push({ emailAddress: "Email не соответствует" })
          setError("emailAddress")
          setText("Email не соответствует")
        }

        if (errors.length > 0) {
          event.preventDefault()
          event.stopPropagation()
        } else {
        }
      }}
    >
      <Input
        htmlFor={"1"}
        label={"ФИО*"}
        placeholder={"Введите ваши фамилию, имя и отчество"}
        text={text}
        name={"entry.10457377"}
        register={register}
        errors={errors}
        error={error}
        {...styles}
      />

      <Input
        htmlFor={"2"}
        label={"Телефон*"}
        placeholder={"Введите ваш номер телефона"}
        text={text}
        name={"entry.2087744403"}
        register={register}
        errors={errors}
        error={error}
        {...styles}
      />

      <Input
        htmlFor={"3"}
        label={"E-mail*"}
        placeholder={"Введите ваш e-mail адрес"}
        text={text}
        name={"emailAddress"}
        register={register}
        errors={errors}
        error={error}
        {...styles}
      />

      <Input
        htmlFor={"4"}
        label={"Номер приставки"}
        placeholder={"Введите ваш номер приставки при наличии"}
        name={"entry.40037458"}
        register={register}
        {...styles}
      />
      <Input
        htmlFor={"5"}
        label={"Город"}
        placeholder={"Введите город проживания"}
        name={"entry.405545350"}
        register={register}
        {...styles}
      />

      <div className={"result-form__send-wrapper"}>
        <Button name={"Участвовать!"} />
      </div>
    </form>
  )
}

export default ResultPageForm
