import { reactQuiz } from 'data/quiz'
import PageHeader from 'components/PageHeader'
import QuizContainer from 'components/QuizContainer'

const QuizReact = () => {
  return (
    <>
      <PageHeader title='React Quiz' hasBackBtn />
      <main>
        <QuizContainer currentQuizs={reactQuiz} />
      </main>
    </>
  )
}

export default QuizReact
