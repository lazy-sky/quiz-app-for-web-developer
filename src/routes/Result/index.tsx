import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import ReactMarkdown from 'react-markdown'
import cx from 'classnames'

import { answerSheetState, quizsState } from 'store/atom'
import PageHeader from 'components/PageHeader'
import QuizSelector from 'components/QuizSelector'

import styles from './result.module.scss'

const Result = () => {
  const quizs = useRecoilValue(quizsState)
  const answerSheet = useRecoilValue(answerSheetState)
  const correctCount = answerSheet.filter((answer, index) => answer === quizs[index].answer).length
  const [commentaryShowIndex, setCommentaryShowIndex] = useState(-1)

  const handleCommentaryClick = (quizIndex: number) => {
    if (quizIndex === commentaryShowIndex) {
      setCommentaryShowIndex(-1)
      return
    }
    setCommentaryShowIndex(quizIndex)
  }

  return (
    <div>
      <PageHeader title='결과' />
      <main>
        <div className={styles.result}>
          <div className={styles.score}>
            점수 : <span>{correctCount}</span> / {quizs.length}
          </div>
          <ul className={styles.resultSheet}>
            {quizs.map((quiz, quizIndex) => (
              <li key={quiz.question}>
                <h3 className={styles.question}>
                  <ReactMarkdown>{`문제 ${quizIndex + 1}. ${quiz.question}`}</ReactMarkdown>
                </h3>
                <ReactMarkdown>{quiz?.code || ''}</ReactMarkdown>
                <ul className={styles.choices}>
                  {quiz.choices.map((choice, choiceIndex) => (
                    <li
                      key={choice}
                      className={cx(
                        choiceIndex === quiz.answer && styles.answer,
                        choiceIndex === answerSheet[quizIndex] && styles.myChoice
                      )}
                    >
                      {choice}
                    </li>
                  ))}
                </ul>
                {quiz.commentary && (
                  <button type='button' onClick={() => handleCommentaryClick(quizIndex)} className={styles.commentary}>
                    해설
                  </button>
                )}
                {quizIndex === commentaryShowIndex &&
                  quiz.commentary?.map((paragraph) => (
                    <p key={paragraph} className={styles.commentary}>
                      <ReactMarkdown>{paragraph}</ReactMarkdown>
                    </p>
                  ))}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.others}>
          <h2>다른 퀴즈도 풀어보기</h2>
          <QuizSelector />
        </div>
      </main>
    </div>
  )
}

export default Result
