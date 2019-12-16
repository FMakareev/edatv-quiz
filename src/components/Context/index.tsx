import React from "react"
import { IAnswers } from "../../pages/ContentTestPage"



type TestQuiz = {
  answers: IAnswers[],
  id: number
  img: string
  text: string
}

type TestQuizContext = {
  clickAnswer: (id:number)=>any
  activeQuestion: number
  test: TestQuiz[]
}

export const Context = React.createContext<TestQuizContext>({
  clickAnswer: ()=>{},
  activeQuestion: 0,
  test: [],
})

export default Context
