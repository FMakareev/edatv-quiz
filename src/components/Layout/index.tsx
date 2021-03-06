import React, { useState } from "react"
import "../../styles/components/layout.scss"
import Context from "../Context"
import { navigate } from "gatsby"

/** View */
import Head from "../Head/Head"
import Header from "../Header"

/** Image */
const bc = require("../../images/bc-test.svg") as string

export interface ILayout {
  children: any
}

export default ({ children }: ILayout) => {
  /** Данные для теста */
  const [test, setTest] = useState([
    {
      text: "Вы бы поделились шаурмой с другом, когда сами голодны?",
      img: bc,
      id: 1,
      rightAnswer: 10,
      answers: [
        { answer: "Да", id: 10 },
        { answer: "Нет", id: 11 },
      ],
    },
    {
      text: "Вопрос второй?",
      img: bc,
      id: 2,
      rightAnswer: 10,
      answers: [
        { answer: "Да", id: 10 },
        { answer: "Нет", id: 11 },
      ],
    },
    {
      text: "И чо? И чо ?",
      img: bc,
      id: 3,
      rightAnswer: 10,
      answers: [
        { answer: "Да", id: 10 },
        { answer: "Нет", id: 11 },
      ],
    },
  ])

  /** Активный вопрос */
  let [activeQuestion, setActiveQuestion] = useState(0)

  /** Полученный ответ */
  let [currentAnswer, setCurrrentAnswer] = useState([])

  /**
   * Функция для работы с тестом
   * @param id number - принимает id выбранного ответа в тесте
   */
  const clickAnswer = (id: number) => {
    if (test.length === activeQuestion + 1) {
      /** Тут нужно как-то реализовать переходит на страницу результата */
      navigate("/result")
    } else {
      /** Меняем стейт активного вопроса */
      setActiveQuestion(activeQuestion + 1)

      /**Получаем стейт с выбранными ответами, чтобы потом куда-то прокинуть, если нужно будет */
      //@ts-ignore
      setCurrrentAnswer([
        ...currentAnswer,
        {
          answerQuestion: test[activeQuestion].text,
          answers: test[activeQuestion].answers.filter(item => item.id === id),
        },
      ])
    }
  }

  return (
    <>
      <Head />
      <Header />
      <Context.Provider value={{ test, clickAnswer, activeQuestion }}>
        {children}
      </Context.Provider>
    </>
  )
}
