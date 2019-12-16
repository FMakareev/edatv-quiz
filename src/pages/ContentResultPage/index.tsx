import React from "react"
import "../../styles/ContentResultPage/contentResultPage.scss"

/** Image */
const burger = require("../../images/burger.svg") as string

/** Components */
import ResultPageForm from "./ResultPageForm"
import ResultPageSocial from "./ResultPageSocial"
import ResultPagePresent from "./ResultPagePresent"
import RulesSale from "../../components/RulesSale"

/** View */
import Paragraph from "../../components/Paragraph"

export const ContentResultPage = () => {
  return (
    <>
      <div className={"result-wrapper"}>
        <div className={"result-flex"}>
          <img className={"result-image__main"} src={burger} alt={"Бургер"} />

          <div>
            <h2 className={"result-title"}>Результат</h2>

            <Paragraph
              text={`Ради еды вы готовы на все, даже стащить последний бутерброд у вашего соседа. Ночью вы опустошите холодильник, днем оставите зарплату в кафе, а вечером зайдете в гости и угоститесь вкусным ужином у друзей. Еда ваше все!
`}
              classes={"result-subtitle"}
            />

            <h3 className={"result-share"}>Поделись результатом в соцсетях!</h3>

            <ResultPageSocial />
          </div>
        </div>
      </div>

      <div className={"result-container"}>
        <div className={"result-wrapper"}>
          <ResultPagePresent />

          <div className={"result-present__text"}>
            Результат объявят 10 января в 23.00 по Московскому времени. Призы
            могут отличаться от представленных изображений.
          </div>

          <ResultPageForm />

          <RulesSale />
        </div>
      </div>
    </>
  )
}

export default ContentResultPage
