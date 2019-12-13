import React from "react"

/**Image */
const vk = require("../../images/vk.svg") as string
const facebook = require("../../images/facebook.svg") as string
const twitter = require("../../images/twitter.svg") as string

const ResultPageSocial = () => {
  return (
    <div className={"result-social__block"}>
      <img className={"result-social_image"} src={facebook} alt="Фейсбук" />

      <img className={"result-social_image"} src={vk} alt="Вконакте" />

      <img className={"result-social_image"} src={twitter} alt="Твиттер" />
    </div>
  )
}

export default ResultPageSocial
