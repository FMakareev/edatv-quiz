import React from "react"
import "../../styles/components/header.scss"

/** Image  */
const tricolor = require("../../images/tricolor.png") as string
const age = require("../../images/18.svg") as string
const food = require("../../images/ic_Foodlogo.svg") as string

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

      <div>
        <img
          className={"header-image middle-img"}
          src={tricolor}
          alt="Триколор"
          width="200"
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
