import { Link } from 'react-router-dom'

import styles from './quizSelector.module.scss'

const QuizSelector = () => {
  return (
    <ul className={styles.quizSelector}>
      <li>
        <Link to='/quiz/a'>
          <h3>Quiz A</h3>
          <p>Quiz A에 대한 설명</p>
        </Link>
      </li>
      <li>
        <Link to='/quiz/b'>
          <h3>Quiz B</h3>
          <p>Quiz B에 대한 설명</p>
        </Link>
      </li>
      <li>
        <Link to='/quiz/c'>
          <h3>Quiz C</h3>
          <p>Quiz C에 대한 설명</p>
        </Link>
      </li>
    </ul>
  )
}

export default QuizSelector
