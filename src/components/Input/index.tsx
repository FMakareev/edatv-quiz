import React from "react"

export interface IInput {
  classesLabel: string
  htmlFor: string
  label: string
  type: string
  placeholder: string
  text?: string
  classesInput: string
  classesText?: string
}

const Input = ({
  classesLabel,
  htmlFor,
  label,
  type,
  placeholder,
  text,
  classesInput,
  classesText,
}: IInput) => {
  return (
    <div>
      <label className={classesLabel} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={classesInput}
        type={type}
        placeholder={placeholder}
        id={htmlFor}
      />
      <p className={classesText}>{text}</p>
    </div>
  )
}

export default Input
