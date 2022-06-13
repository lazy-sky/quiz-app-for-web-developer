import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { useMount } from 'react-use'
import ReactMarkdown from 'react-markdown'
import cx from 'classnames'

import { IQuiz } from 'types/quiz'
import { answerSheetState, quizsState } from 'store/atom'

import styles from './quizContainer.module.scss'

const QuizContainer = ({ currentQuizs }: { currentQuizs: IQuiz[] }) => {
  const navigate = useNavigate()
  const [quizs, setQuizs] = useRecoilState(quizsState)
  const [answerSheet, setAnswerSheet] = useRecoilState(answerSheetState)
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)

  useMount(() => {
    setQuizs(currentQuizs)
    const initalized = Array.from({ length: quizs.length }).fill(-1) as number[]
    setAnswerSheet(initalized)
  })

  const handleChoiceClick = (choiceIndex: number) => {
    setAnswerSheet((prev) => prev.map((answer, index) => (index === currentQuizIndex ? choiceIndex : answer)))
  }

  const handlePrevClick = () => {
    setCurrentQuizIndex((prev) => prev - 1)
  }

  const handleNextClick = () => {
    setCurrentQuizIndex((prev) => prev + 1)
  }

  const handleShowResultClick = () => {
    navigate('/result')
  }

  return (
    <div className={styles.quizCard}>
      <div className={styles.questionCount}>
        문제 <span>{currentQuizIndex + 1}</span> / {quizs.length}
      </div>
      <h3 className={styles.question}>
        <ReactMarkdown>{quizs[currentQuizIndex]?.question}</ReactMarkdown>
      </h3>
      <ReactMarkdown>{quizs[currentQuizIndex]?.code || ''}</ReactMarkdown>
      <div className={styles.choices}>
        {quizs[currentQuizIndex]?.choices.map((choice, index) => (
          <button
            type='button'
            key={choice}
            onClick={() => handleChoiceClick(index)}
            className={cx(answerSheet[currentQuizIndex] === index && styles.isSelected)}
          >
            {choice}
          </button>
        ))}
      </div>
      <div className={styles.moveBtns}>
        {currentQuizIndex > 0 && (
          <button type='button' onClick={handlePrevClick}>
            이전 문제
          </button>
        )}
        {currentQuizIndex < quizs.length - 1 && (
          <button type='button' onClick={handleNextClick}>
            다음 문제
          </button>
        )}
        {currentQuizIndex === quizs.length - 1 && (
          <button type='button' onClick={handleShowResultClick} className={styles.result}>
            결과 보기
          </button>
        )}
      </div>
    </div>
  )
}

export default QuizContainer
