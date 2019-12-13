import React from "react"
import { Link } from "gatsby"

/** View */
import Button from "../../components/Button"
import Input from "../../components/Input"

export interface IResultPageForm {
  handleSubmit: (event: any) => void
}

const styles = {
  classesLabel: "result-form__label",
  type: "text",
  classesInput: "result-form__input",
  classesText: "result-form__validate",
}

const ResultPageForm = ({ handleSubmit }: IResultPageForm) => {
  return (
    <form className={"result-form"} onSubmit={handleSubmit}>
      <Input
        htmlFor={"1"}
        label={"ФИО*"}
        placeholder={"Введите ваши фамилию, имя и отчество"}
        text={"Обязательное поле"}
        {...styles}
      />

      <Input
        htmlFor={"2"}
        label={"Телефон*"}
        placeholder={"Введите ваш номер телефона"}
        text={"Обязательное поле"}
        {...styles}
      />

      <Input
        htmlFor={"3"}
        label={" E-mail*"}
        placeholder={"Введите ваш e-mail адрес"}
        text={"Обязательное поле"}
        {...styles}
      />

      <Input
        htmlFor={"4"}
        label={"Номер приставки"}
        placeholder={"Введите ваш номер приставки при наличии"}
        {...styles}
      />

      <Input
        htmlFor={"5"}
        label={"Город"}
        placeholder={"Введите город проживания"}
        {...styles}
      />

      <div className={"result-form__send-wrapper"}>
        <Link className={"result-form__send-link"} to={"/"}>
          <Button name={"Участвовать!"} />
        </Link>
      </div>
    </form>
  )
}

export default ResultPageForm
