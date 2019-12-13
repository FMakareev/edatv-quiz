import React from "react"
import { Link } from "gatsby"
import "../../styles/ContentTestPage/contentTestPage.scss"

/** Image */
const bc = require("../../images/bc-test.svg") as string

/** View */
import Paragraph from "../../components/Paragraph"

export const ContentTestPage = () => {
  return (
    <div className={"test__wrapper"}>
      <div style={{ position: "relative" }}>
        <img
          className={"test__image"}
          src={bc}
          alt={"Бекграунд"}
          width={1034}
          height={416}
        />

        <div className={"test__triangle"}></div>
        <p className={"test__triangle-text"}>1/5</p>
      </div>

      <Paragraph
        classes={"test__question"}
        text={"  Вы бы поделились шаурмой с другом, когда сами голодны?"}
      />

      <div className={"test__buttons"}>
        <Link className={"test__buttons-link"} to={"/result"}>
          <button className={"test__buttons-name"}>Да</button>
        </Link>

        <Link className={"test__buttons-link"} to={"/result"}>
          <button className={"test__buttons-name"}>Нет </button>
        </Link>
      </div>
    </div>
  )
}

export default ContentTestPage
