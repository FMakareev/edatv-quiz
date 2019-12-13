import React from "react"
import "../../styles/components/layout.scss"

/** View */
import Header from "../Header"

export interface ILayout {
  children: any
}

export default ({ children }: ILayout) => (
  <>
    <Header />
    {children}

    <div className={"layout-sale"}>
      Правила акции. Срок проведения акции: с 20 декабря 2019 года по 15 января
      2020 года.
    </div>
  </>
)
