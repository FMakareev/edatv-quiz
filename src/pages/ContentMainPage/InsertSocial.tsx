import React from "react"

/** Image */
const apple = require("../../images/apple.svg") as string
const google = require("../../images/google.svg") as string
const logo = require("../../images/logo-tricolor.svg") as string

/** View */
import BlockItem from "../../components/BlockItem"

const styles = {
  classImg: "insert-image",
  classPar: "insert-link__description",
  classBlock: "insert-link__content",
}

const InsertSocial = () => {
  return (
    <div className={"insert-link"}>
      <img
        className={"insert-image"}
        src={logo}
        alt={"Логотип триколора"}
        width="60"
        height="60"
      />

      <BlockItem
        src={google}
        alt="Гугл"
        text={` Google Play и логотип Google Play являются товарными знаками
                корпорации Google LLC`}
        {...styles}
      />

      <BlockItem
        src={apple}
        alt="Апп стор"
        text={`App Store является знаком обслуживания Apple Inc`}
        {...styles}
      />
    </div>
  )
}

export default InsertSocial
