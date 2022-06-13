import PageHeader from 'components/PageHeader'
import QuizSelector from 'components/QuizSelector'

import styles from './quizHome.module.scss'

const QuizHome = () => {
  return (
    <div>
      <PageHeader title='퀴즈 선택' />
      <main>
        <p className={styles.welcomeMessage}>퀴즈를 선택해주세요!</p>
        <QuizSelector />
      </main>
    </div>
  )
}

export default QuizHome
