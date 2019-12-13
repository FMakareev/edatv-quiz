import React from "react"

/** Image */
const tv = require("../../images/1_tv.svg") as string
const free = require("../../images/2_free.svg") as string
const mobtv = require("../../images/3_mobtv.svg") as string
const id = require("../../images/4_id.svg") as string
const reg = require("../../images/5_id.svg") as string

/** View */
import BlockItem from "../../components/BlockItem"

const styles = {
  classImg: "insert-image",
  classPar: "insert-left__list-item-text",
  classBlock: "insert-left__list-item",
}

const data = [
  {
    src: tv,
    alt: "Телевизор",
    text: `Более 150 популярных общероссийских и тематических телеканалов онлайн.`,
  },
  {
    src: free,
    alt: "Бесплатный",
    text: `Бесплатный каталог фильмов.`,
  },
  {
    src: mobtv,
    alt: "Доступность",
    text: ` Доступно на смартфонах, планшетах и Smart TV.`,
  },
  {
    src: id,
    alt: "Один аккаунт",
    text: `Просмотр на 5 устройствах с одним аккаунтом.`,
  },
  {
    src: reg,
    alt: "регистрация",
    text: `Простая регистрация по номеру телефона.`,
  },
]

const InsertBonus = () => {
  return (
    <ul className={"insert-left__list"}>
      {data.map(({ src, alt, text }, index) => {
        return (
          <BlockItem key={index} src={src} alt={alt} text={text} {...styles} />
        )
      })}
    </ul>
  )
}

export default InsertBonus
