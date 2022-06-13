import { IQuiz } from 'types/quiz'

export const quizs: IQuiz[] = [
  {
    question: '프랑스의 수도는?',
    choices: [
      { text: '뉴욕', isCorrect: false },
      { text: '런던', isCorrect: false },
      { text: '파리', isCorrect: true },
      { text: '서울', isCorrect: false },
    ],
  },
  {
    question: '테슬라의 CEO는?',
    choices: [
      { text: '제프 베조스', isCorrect: false },
      { text: '일론 머스크', isCorrect: true },
      { text: '빌 게이츠', isCorrect: false },
      { text: '토니 스타크', isCorrect: false },
    ],
  },
  {
    question: '아이폰의 제조사는?',
    choices: [
      { text: '애플', isCorrect: true },
      { text: '인텔', isCorrect: false },
      { text: '아마존', isCorrect: false },
      { text: '마이크로소프트', isCorrect: false },
    ],
  },
]
