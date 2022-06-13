import { atom } from 'recoil'

import { IQuiz } from 'types/quiz'

export const quizsState = atom<IQuiz[]>({
  key: 'quizsState',
  default: [],
})

export const answerSheetState = atom<number[]>({
  key: 'answerSheetState',
  default: [],
})
