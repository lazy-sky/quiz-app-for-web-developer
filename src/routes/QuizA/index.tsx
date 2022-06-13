import { dummyQuizs } from 'data/quiz'
import PageHeader from 'components/PageHeader'
import QuizContainer from 'components/QuizContainer'

const QuizA = () => {
  return (
    <>
      <PageHeader title='Quiz A' hasBackBtn />
      <main>
        <QuizContainer currentQuizs={dummyQuizs} />
      </main>
    </>
  )
}

export default QuizA
