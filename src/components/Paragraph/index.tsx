import React from "react"

export interface IParagraph {
  classes: string
  text?: string
}

const Paragraph = ({ classes, text }: IParagraph) => {
  return <p className={classes}>{text}</p>
}

export default Paragraph
