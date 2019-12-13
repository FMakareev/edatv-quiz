import React from "react"
import "../../styles/components/Button.scss"

export interface IButton {
  name: string
}

const Button = ({ name }: IButton) => {
  return <button className={"component-button"}>{name}</button>
}

export default Button
