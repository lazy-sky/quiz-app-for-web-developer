import { dummyQuizs } from 'data/quiz'
import PageHeader from 'components/PageHeader'
import QuizContainer from 'components/QuizContainer'

const QuizB = () => {
  return (
    <>
      <PageHeader title='Quiz B' />
      <main>
        <QuizContainer currentQuizs={dummyQuizs} />
      </main>
    </>
  )
}

export default QuizB
