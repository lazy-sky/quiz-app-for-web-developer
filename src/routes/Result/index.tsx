import { useRecoilValue } from 'recoil'
import ReactMarkdown from 'react-markdown'
import cx from 'classnames'

import { answerSheetState, quizsState } from 'store/atom'
import PageHeader from 'components/PageHeader'

import styles from './result.module.scss'

const Result = () => {
  const quizs = useRecoilValue(quizsState)
  const answerSheet = useRecoilValue(answerSheetState)
  const correctCount = answerSheet.filter((answer, index) => answer === quizs[index].answer).length

  return (
    <div>
      <PageHeader title='결과' />
      <main>
        <div className={styles.result}>
          <div className={styles.score}>
            점수 : <span>{correctCount}</span> / {quizs.length}
          </div>
          <div className={styles.indicators}>
            <div className={styles.answer}>정답</div>
            <div className={styles.myChoice}>내가 고른 답</div>
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
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Result
