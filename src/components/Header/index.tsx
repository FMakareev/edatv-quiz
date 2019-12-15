import React from "react"
import "../../styles/components/header.scss"

/** Image  */
const tricolor = require("../../images/tricolor.png") as string
const age = require("../../images/18.svg") as string
const food = require("../../images/ic_Foodlogo.svg") as string
const cloudLeft = require("../../images/cloudLeft.png") as string
const cloudRight = require("../../images/cloudRight.png") as string

export const Header = () => {
  return (
    <div className={"header-wrapper"}>
      <img
        className={"header-image"}
        src={food}
        alt="Триколор"
        width="86"
        height="55"
      />

      <img
        src={cloudLeft}
        alt=""
        className={"header-bc__right"}
        width={277}
        height={178}
      />
      <img
        src={cloudRight}
        alt=""
        className={"header-bc__left"}
        width={357}
        height={154}
      />

      <div className={"header-image__block"}>
        <img
          className={"header-image middle-img"}
          src={tricolor}
          alt="Триколор"
          width="163"
          height="42"
        />
        <img
          className={"header-image"}
          src={age}
          alt="Ограничение по возрасту"
          width="38"
          height="40"
        />
      </div>
    </div>
  )
}

export default Header
