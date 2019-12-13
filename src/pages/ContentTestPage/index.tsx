import React, { useContext } from "react"
import "../../styles/ContentTestPage/contentTestPage.scss"
import Context from "../../components/Context"

// /** Image */
// const bc = require("../../images/bc-test.svg") as string

/** View */
import Paragraph from "../../components/Paragraph"

export interface IAnswers {
  [x: string]: any
  answer: string
  id: number
}

export const ContentTestPage = () => {
  const { test, clickAnswer, activeQuestion, changedPage } = useContext(Context)
  const curQuiz = test[activeQuestion]

  return (
    <>
      <div className={"test__wrapper"} key={curQuiz.text}>
        <div style={{ position: "relative" }}>
          <img
            className={"test__image"}
            src={curQuiz.img}
            alt={"Бекграунд"}
            width={1034}
            height={416}
          />

          <div className={"test__triangle"}></div>
          <p className={"test__triangle-text"}>
            {activeQuestion + 1}/{test.length}
          </p>
        </div>

        <Paragraph classes={"test__question"} text={curQuiz.text} />

        <div className={"test__buttons"}>
          {curQuiz.answers.map(({ answer, id }: IAnswers) => {
            return (
              <div
                key={id}
                className={"test__buttons-link"}
                onClick={() => clickAnswer(id)}
              >
                <button className={"test__buttons-name"}>{answer}</button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ContentTestPage
