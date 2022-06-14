export interface IQuiz {
  question: string
  code?: string
  choices: string[]
  answer: number
  commentary?: string[]
  // TODO: 해설
}
