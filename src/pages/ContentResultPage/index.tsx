import React, { useContext } from "react"
import "../../styles/ContentResultPage/contentResultPage.scss"

import Context from "../../components/Context"

/** Image */
const burger = require("../../images/burger.svg") as string

/** Components */
import ResultPageForm from "./ResultPageForm"
import ResultPageSocial from "./ResultPageSocial"
import ResultPagePresent from "./ResultPagePresent"

/** View */
import Paragraph from "../../components/Paragraph"

export const ContentResultPage = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(event.target)
  }

  const { changedPage } = useContext(Context)

  return (
    <div className={"result-wrapper"}>
      <div className={"result-flex"}>
        <img className={"result-image__main"} src={burger} alt={"Бургер"} />

        <div>
          <h2 className={"result-title"}>Результат</h2>

          <Paragraph
            text={`Ради еды вы готовы на все, даже стащить последний бутерброд у вашего
            соседа.Ради еды вы готовы на все, даже стащить последний бутерброд у
            вашего соседа.Ради еды вы готовы на все, даже стащить последний
            бутерброд у вашего соседа.`}
            classes={"result-subtitle"}
          />

          <h3 className={"result-share"}>Поделись результатом в соцсетях!</h3>

          <ResultPageSocial />
        </div>
      </div>

      <div>
        <ResultPagePresent />

        <div className={"result-present__text"}>
          Результат объявят 10 января в 23.00 по Московскому времени. Призы
          могут отличаться от представленных изображений.
        </div>

        <ResultPageForm handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default ContentResultPage
