export interface IQuiz {
  question: string
  choices: {
    text: string
    isCorrect: boolean
  }[]
}
