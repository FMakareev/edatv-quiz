import React from "react"

export interface IInput {
  classesLabel: string
  htmlFor: string
  label: string
  type: string
  placeholder: string
  name: string
  text?: string
  classesInput: string
  classesText?: string

  [prop: string]: any
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
  classesTextError,
  register,
  name,
  error,
  ...rest
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
        ref={register}
        name={name}
        {...rest}
      />
      <p className={classesText}>{error === name ? text : ""}</p>
    </div>
  )
}

export default Input
