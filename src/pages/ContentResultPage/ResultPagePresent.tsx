import React from "react"

/** Image */
const fartuk = require("../../images/fartuk.svg") as string
const knife = require("../../images/knife.svg") as string
const stove = require("../../images/stove.svg") as string

const ResultPagePresent = () => {
  return (
    <div>
      <h2 className={"result-present__title"}>Участвуй в розыгрыше!</h2>

      <div className={"result-present__wrapper"}>
        <div className={"result-present__container"}>
          <div className={"result-present__block"}>
            <img
              className={"result-present__image"}
              src={fartuk}
              alt={"Фартук"}
            />
          </div>

          <div className={"result-present__description"}>Фартук от Шефа</div>
        </div>

        <div className={"result-present__container"}>
          <div className={"result-present__block"}>
            <img
              className={"result-present__image"}
              src={knife}
              width={118}
              height={174}
              alt={"Ножы"}
            />
          </div>

          <div className={"result-present__description"}>Набор ножей</div>
        </div>

        <div className={"result-present__container"}>
          <div className={"result-present__block"}>
            <img
              className={"result-present__image"}
              src={stove}
              alt={"Электроплита"}
            />
          </div>

          <div className={"result-present__description"}>Электроплита</div>
        </div>
      </div>
    </div>
  )
}

export default ResultPagePresent
