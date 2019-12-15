import React from "react"
import { Link } from "gatsby"

/**CSS */
import "../../styles/ContentMainPage/contentPage.scss"

/** Image */
const test = require("../../images/ic_test.svg") as string
const win = require("../../images/ic_win.svg") as string
const tell = require("../../images/ic_tell.svg") as string

/** Components */
import Button from "../../components/Button"
import Paragraph from "../../components/Paragraph"
import BlockItem from "../../components/BlockItem"

export default function ContentPage() {
  return (
    <div className="content-container">
      <div className={"content-wrapper"}>
        <h1 className={"content-title"}>На что вы готовы ради «Еды»?</h1>

        <Paragraph
          classes={"content-subtitle"}
          text={`Готовы ли вы стащить у соседа последний бутерброд из холодильника даже
          при страхе быть обнаруженным? Или потратить последние деньги на вкусный
          салат из ресторана?`}
        />

        <Paragraph
          classes={"content-subtitle__addiontal"}
          text={`Пройдите тест от телеканала «Еда» и Триколора и узнайте, как далеко вы
        готовы зайти.`}
        />

        <div className={"content-stage__wrapper"}>
          <BlockItem
            src={test}
            alt={"Тест"}
            text={"Пройди тест"}
            classImg={"content-stage__image"}
            classPar={"content-stage__text"}
            classBlock={"content-flex"}
          />

          <p className={"content-stage__arrow"}>&rarr;</p>

          <BlockItem
            src={tell}
            alt={"Тест"}
            text={"Расскажи друзьям"}
            classImg={"content-stage__image"}
            classPar={"content-stage__text"}
            classBlock={"content-flex"}
          />

          <p className={"content-stage__arrow"}>&rarr;</p>

          <BlockItem
            src={win}
            alt={"Тест"}
            text={"Выиграй приз"}
            classImg={"content-stage__image"}
            classPar={"content-stage__text"}
            classBlock={"content-flex"}
          />
        </div>

        <div className={"content-button"}>
          <Link className={"content-link"} to={"/test"}>
            <Button name={"Начать"} />
          </Link>
        </div>
      </div>
    </div>
  )
}
