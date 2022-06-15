import { Link } from 'react-router-dom'

import Sponsorship from 'components/Sponsorship'

import styles from './quizSelector.module.scss'

const QuizSelector = () => {
  return (
    <ul className={styles.quizSelector}>
      <li>
        <Link to='/quiz/react'>
          <h3>React Quiz</h3>
          <p>React 기초 퀴즈입니다.</p>
        </Link>
      </li>
      <li>
        <Link to='/quiz/b'>
          <h3>Quiz B</h3>
          <p>Quiz B에 대한 설명</p>
        </Link>
      </li>
      <li>
        <Link to='/quiz/javascript'>
          <h3>Javascript Quiz</h3>
          <p>Javascript 퀴즈입니다.</p>
        </Link>
      </li>
      <li>
        <Sponsorship />
      </li>
    </ul>
  )
}

export default QuizSelector
