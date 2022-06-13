import PageHeader from 'components/PageHeader'
import QuizContainer from 'components/QuizContainer'
import { JavascriptQuiz } from 'data/quiz'

const QuizJS = () => {
  return (
    <>
      <PageHeader title='Javascript Quiz' hasBackBtn />
      <main>
        <QuizContainer currentQuizs={JavascriptQuiz} />
      </main>
    </>
  )
}

export default QuizJS
