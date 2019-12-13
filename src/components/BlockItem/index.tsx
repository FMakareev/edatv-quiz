import React from "react"

export interface IBlockItem {
  src: string
  alt: string
  text: string
  classImg: string
  classPar: string
  classBlock: string
}

const BlockItem = ({
  src,
  alt,
  text,
  classImg,
  classPar,
  classBlock,
}: IBlockItem) => {
  return (
    <div className={classBlock}>
      <img className={classImg} src={src} alt={alt} />
      <p className={classPar}>{text}</p>
    </div>
  )
}

export default BlockItem
