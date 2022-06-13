import PageHeader from 'components/PageHeader'
import QuizSelector from 'components/QuizSelector'

import styles from './home.module.scss'

const Home = () => {
  return (
    <div>
      <PageHeader title='Home' />
      <main>
        <p className={styles.welcomeMessage}>Quiz App에 오신 것을 환영합니다.</p>
        <QuizSelector />
      </main>
    </div>
  )
}

export default Home
