import React from "react"
import { Link } from "gatsby"
import "../../styles/ContentMainPage/insert.scss"

/** Image */
const gadgets = require("../../images/gadgets.svg") as string

/** View */
import Paragraph from "../../components/Paragraph"

/** Component */
import InsertSocial from "./InsertSocial"
import InsertBonus from "./InsertBonus"

export default function Insert() {
  return (
    <div className={"insert-wrapper"}>
      <h2 className={"insert-title"}>
        Смотрите телеканал «Еда» в приложении «Триколор Кино и ТВ»!
      </h2>

      <div className={"insert-block"}>
        <img
          className={"insert-image"}
          src={gadgets}
          alt={"Виды гаджетов"}
          width={"507"}
          height={"149"}
        />
      </div>

      <div className={"insert-content"}>
        <div className={"insert-left"}>
          <h3 className={"insert-left__title"}>
            Смотри онлайн-каналы на пяти устройствах с одного Триколор ID!{" "}
          </h3>

          <InsertBonus />
        </div>

        <div className={"insert-right"}>
          <Paragraph
            classes={"insert-right__title"}
            text={`Начните пользоваться «Триколор Кино и ТВ» прямо сейчас! Скачивайте
            приложение на ваше устройство, используйте для входа Триколор ID и
            пароль от Личного кабинета. Если вы еще не клиент — получите
            Триколор ID и пароль прямо в приложении.`}
          />

          <Link className={"insert-right__link"} to={"/test"}>
            Инструкция для мобильных устройств >>
          </Link>
          <Link className={"insert-right__link marg"} to={"/test"}>
            Инструкция для Smart TV >>
          </Link>

          <InsertSocial />
        </div>
      </div>
    </div>
  )
}
