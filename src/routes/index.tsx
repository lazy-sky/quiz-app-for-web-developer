import { Routes, Route } from 'react-router-dom'

import GNB from 'components/GNB'
import Home from './Home'
import QuizHome from './QuizHome'
import QuizReact from './QuizReact'
import QuizB from './QuizB'
import Result from './Result'
import Maker from './Maker'

import styles from './routes.module.scss'

// 제목은 웹개발자 퀴즈
// TODO: 카테고리별 퀴즈 만들기
// 홈탭은 각 퀴즈 선택으로
// 풀 문제 개수 선택 가능 5/10/20/50 이런 식으로

// 면접 질문 탭도 만들기
// 문제 전부 볼 수 있는 공부 모드
// 결과 페이지 사진 저장 기능
// 가입하면 결과 저장해서 리워드
// 오답노트: 로컬스토리지 이용?
const App = () => {
  return (
    <>
      <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='quiz'>
            <Route path='' element={<QuizHome />} />
            <Route path='react' element={<QuizReact />} />
            <Route path='b' element={<QuizB />} />
          </Route>
          <Route path='result' element={<Result />} />
          <Route path='maker' element={<Maker />} />
        </Routes>
      </div>
      <footer>
        <GNB />
      </footer>
    </>
  )
}

export default App
