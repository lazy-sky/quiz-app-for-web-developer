/* eslint-disable max-lines */
import { IQuiz } from 'types/quiz'

export const dummyQuizs: IQuiz[] = [
  {
    question: '프랑스의 수도는?',
    choices: ['뉴욕', '런던', '파리', '서울'],
    answer: 2,
  },
  {
    question: '테슬라의 CEO는?',
    choices: ['제프 베조스', '일론 머스크', '빌 게이츠', '토니 스타크'],
    answer: 1,
  },
  {
    question: '아이폰의 제조사는?',
    choices: ['애플', '인텔', '아마존', '마이크로소프트'],
    answer: 0,
  },
]

export const reactQuiz: IQuiz[] = [
  {
    question: '새 React 프로젝트를 만드는 올바른 커맨드는?',
    choices: [
      'npx create-react-app myReactApp',
      'npm create-react-app myReactApp',
      'npx create-react-app',
      'npm create-react-app',
    ],
    answer: 0,
  },
  {
    question: '`npx create-react-app myReactApp`에서 `myReactApp`은 무엇을 의미하는가?',
    choices: ['만들 앱의 유형', '새 앱에 사용할 이름', '기존 앱에 대한 참조', '새 앱을 만들 폴더'],
    answer: 1,
  },
  {
    question: 'React 로컬 개발 서버를 시작하는 데 사용되는 커맨드는?',
    choices: ['npm run dev', 'npm start', 'npm build', 'npm serve'],
    answer: 1,
  },
  {
    question: 'React 개발 서버가 사용하는 기본 로컬 호스트 포트 번호는?',
    choices: ['3500', '8080', '5000', '3000'],
    answer: 3,
  },
  {
    question: 'React를 활용하여 코드를 작성하고 실행하려면 Node.js가 필요하다.',
    choices: ['그렇다', '아니다'],
    answer: 0,
  },
  {
    question: '다음 코드에서 렌더링할 엘리먼트의 유형은?',
    code: `
    function Car() {
      return <h1>Ford Mustang</h1>;
    }
    
    const root = createRoot(document.getElementById('root'));
    root.render(<Car />);
    `,
    choices: ['Component', 'h1', 'div', 'ReactDom'],
    answer: 1,
  },
  {
    question: '`chidren` `prop`은 무엇인가?',
    choices: [
      '객체를 property로 설정할 수 있는 property',
      '컴포넌트를 다른 컴포넌트에 중첩할 수 있는 property',
      'state에 자식 값을 추가하는 property',
      '하위 컴포넌트에 데이터를 전달할 수 있는 property',
    ],
    answer: 1,
  },
  {
    question: 'JavaScript에서 상수를 만드는 키워드는?',
    choices: ['let', 'var', 'const', 'constant'],
    answer: 2,
  },
  {
    question: '메모리에 저장된 real DOM의 복사본을 뭐라고 부르는가?',
    choices: ['Virtual DOM', 'DOM', 'React DOM', 'Shadow DOM'],
    answer: 0,
  },
  {
    question: 'React 컴포넌트 이름은 대문자로 시작해야 한다.',
    choices: ['그렇다', '아니다'],
    answer: 0,
  },
  {
    question: 'React 컴포넌트를 조건부로 렌더링하는 데 사용할 수 있는 연산자는?',
    choices: ['||', '??', '::', '&&'],
    answer: 3,
  },
  {
    question: 'JavaScript `map()` 메서드를 사용하여 목록을 렌더링할 때 렌더링된 각 요소마다 필요한 속성은?',
    choices: ['data', 'key', 'index', 'id'],
    answer: 1,
  },
  {
    question: 'React가 JSX를 컴파일하는 데 사용하는 도구는?',
    choices: ['React Router', 'JSX Compiler', 'ReactDOM', 'Babel'],
    answer: 3,
  },
  {
    question: '항상 같은 방식으로 렌더링하는 함수 컴포넌트의 성능을 최적화하는 방법으로 옳은 것은?',
    choices: [
      'React.memo로 감싼다.',
      'useReducer Hook을 사용한다.',
      'shouldComponentUpdate lifecycle 메소드를 사용한다.',
      'useMemo Hook을 사용한다.',
    ],
    answer: 0,
  },
  {
    question: '`<Car {...props} />`에서 사용할 수 있는 `props`는?',
    choices: ['children', 'static property만', '전부', '업데이트된 property만'],
    answer: 2,
  },
  {
    question: 'ref의 일반적인 사용 사례는?',
    choices: ['함수를 바인딩', 'DOM 노드에 직접 접근', '함수를 참조', '다른 Javascript 파일을 참조'],
    answer: 1,
  },
  {
    question: '전개(spread) 연산자를 사용하여 다음 배열을 결합하는 방법은?',
    code: `
      const array1 = [1, 2, 3];
      const array2 = [4, 5, 6];
    `,
    choices: [
      'const combined = array1 + array2;',
      'const combined = ...array1 + ...array2;',
      'const combined = [array1, array2];',
      'const combined = [...array1, ...array2];  ',
    ],
    answer: 3,
  },
  {
    question: 'React는 root document 엘리먼트에 있는 엘리먼트들만 렌더링할 수 있다.',
    choices: ['그렇다', '아니다'],
    answer: 1,
  },
  {
    question: 'React에서 컴포넌트를 가져오는 문법으로 옳은 것은?',
    choices: [
      'import React.Component from "react"',
      'import { Component } from "react"',
      'import [ Component ] from "react"',
      'import Component from "react"',
    ],
    answer: 1,
  },
  {
    question: '다음 코드에서 고쳐야 하는 것은?',
    code: `
      function car({make, model}) {
        return <h1>{make} {model}</h1>;
      };
    `,
    choices: [
      '함수의 첫 번째 문자는 대문자로 써야 한다.',
      '반환문을 제거해야 한다.',
      '반환 값에 괄호를 추가해야 한다.',
      'fragment로 감싼 요소를 반환해야 한다.',
    ],
    answer: 0,
  },
  {
    question: 'React는 UI를 컴포넌트로 분리한다. UI를 만들기 위해 컴포넌트를 어떻게 결합해야 하는가?',
    choices: ['컴포넌트를 중첩하여', '코드 스플리팅을 통해', '웹팩을 사용하여', '폴더 구조를 통해'],
    answer: 0,
  },
  {
    question: '일반적으로 React Hooks가 클래스 컴포넌트를 대체하지만 React 팀에게 클래스를 제거할 계획은 없다.',
    choices: ['그렇다', '아니다'],
    answer: 0,
  },
  {
    question: 'React Hooks의 규칙으로 옳지 않은 것은?',
    choices: [
      '클래스 또는 함수  컴포넌트에서 호출할 수 있다.',
      '조건부일 수 없다.',
      '함수 컴포넌트 내부에서만 호출할 수 있다.',
      '컴포넌트의 최상단에서만 호출할 수 있다.',
    ],
    answer: 0,
  },
  {
    question: '다음 코드의 결과로 옳은 것은?',
    code: `
      const make = 'Ford';
      const model = 'Mustang';
      const car = { make, model };
      console.log(car);
    `,
    choices: [
      "{make: 'Ford', model: 'Mustang'}",
      "{car: {make: 'Ford', model: 'Mustang'}}",
      "{car: 'Ford', car: 'Mustang'}}",
      "{{make: 'Ford', model: 'Mustang'}}",
    ],
    answer: 0,
  },
  {
    question: '`props` 값을 컴포넌트의 state로 복사하는 것을 피해야 하는 이유는?',
    choices: [
      '그러면 동기화되지 않을 수 있는 같은 state의 인스턴스 두 개가 생성되기 때문이다.',
      '데이터가 상위 항목으로 되돌아갈 수 있도록 허용하기 때문이다.',
      '절대 상태를 변이시켜서는 안 되기 때문이다.',
      'prop 값을 state로 저장할 수 없기 때문이다.',
    ],
    answer: 0,
  },
]
