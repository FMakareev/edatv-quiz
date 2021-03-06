import React, { useContext } from "react"
import "../../styles/ContentTestPage/contentTestPage.scss"
import Context from "../../components/Context"

/** View */
import Paragraph from "../../components/Paragraph"
import RulesSale from "../../components/RulesSale"

export interface IAnswers {
  answer: string
  id: number
}

export const ContentTestPage = () => {
  const { clickAnswer } = useContext(Context)

  const { activeQuestion } = useContext(Context)
  const { test } = useContext(Context)
  // const getContext = useContext(Context)

  // const curQuiz = getContext.test[getContext.activeQuestion]
  const curQuiz = test[activeQuestion]

  return (
    <>
      <div className={"test__wrapper"} key={curQuiz && curQuiz.text}>
        <div className={"test__block"}>
          <img
            className={"test__image"}
            src={curQuiz && curQuiz.img}
            alt={"Бекграунд"}
            width={1034}
            height={416}
          />

          <div className={"test__triangle"}>
            <p className={"test__triangle-text"}>
              {activeQuestion + 1}/{test.length}
            </p>
          </div>
        </div>

        <div className={"insert-container share"}>
          <Paragraph classes={"test__question"} text={curQuiz && curQuiz.text} />

          <div className={"test__buttons"}>
            {curQuiz && curQuiz.answers.map(({ answer, id }: IAnswers) => {
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

          <RulesSale />
        </div>
      </div>
    </>
  )
}

export default ContentTestPage
