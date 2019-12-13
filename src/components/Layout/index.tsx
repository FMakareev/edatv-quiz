import React, { useState } from "react"
import "../../styles/components/layout.scss"
import Context from "../Context"

/** View */
import Header from "../Header"

/** Image */
const bc = require("../../images/bc-test.svg") as string

export interface ILayout {
  children: any
}

export default ({ children }: ILayout) => {
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
  ])

  let [activeQuestion, setActiveQuestion] = useState(0)
  let [currentAnswer, setCurrrentAnswer] = useState([])
  let [changedPage, setChangedPage] = useState(false)

  const clickAnswer = (id: any) => {
    if (test.length < activeQuestion + 1) {
      setChangedPage(true)
    } else {
      setActiveQuestion(activeQuestion + 1)

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

  console.log(123, currentAnswer)

  return (
    <>
      <Header />
      <Context.Provider
        value={{ test, clickAnswer, activeQuestion, changedPage }}
      >
        {children}
      </Context.Provider>

      <div className={"layout-sale"}>
        Правила акции. Срок проведения акции: с 20 декабря 2019 года по 15
        января 2020 года.
      </div>
    </>
  )
}
