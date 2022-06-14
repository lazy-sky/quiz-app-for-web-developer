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
  {
    question: '`var`, `let`, `const`의 설명으로 옳지 않은 것은',
    choices: [
      'var로 선언한 변수에는 값을 재할당해도 에러가 발생하지 않는다.',
      '변하지 않는 값은 const로 선언하는 것이 권장된다. ',
      'const로 선언한 객체의 프로퍼티 값은 변경될 수 없다.',
      'let의 스코프는 블록레벨이다.',
    ],
    answer: 2,
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

export const JavascriptQuiz: IQuiz[] = [
  {
    question: '다음 코드의 출력 결과로 옳은 것은?',
    code: `
    function sayHi() {
      console.log(name);
      console.log(age);
      var name = 'Sky';
      let age = 99;
    }
    
    sayHi();
    `,
    choices: [
      'Sky 그리고 undefined',
      'Sky 그리고 ReferenceError',
      'ReferenceError 그리고 99',
      'undefined 그리고 ReferenceError',
    ],
    answer: 3,
    commentary: [
      '함수 안에서, 우선 `var` 키워드를 사용해 `name` 변수를 선언해요. 이것은 변수를 정의한 줄에 실제로 도달할 때까지, 기본값 `undefined`으로 호이스팅 되는 것(생성단계에 메모리 공간이 설정)을 의미해요. name 변수를 출력하려는 줄에서 아직 변수를 정의하지 않았기 때문에, undefined 값을 유지해요.',
      '`var`와는 다르게 `let` 키워드(그리고 `const`)를 가진 변수는 호이스팅 되지만, 초기화 되지 않아요. 변수를 선언(초기화)하는 줄 전에는 접근할 수 없어요. 이건 "일시적 사각지대"라고 불려요. 변수가 선언되기 전 변수에 접근하려고 하면, JavaScript는 ReferenceError를 던져요.',
    ],
  },
  {
    question: '다음 코드의 출력 결과로 옳은 것은?',
    code: `
    for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
    }
    
    for (let i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
    }
    `,
    choices: ['0 1 2 그리고 0 1 2', '0 1 2 그리고 3 3 3', '3 3 3 그리고 0 1 2'],
    answer: 2,
    commentary: [
      '`JavaScript`의 이벤트 큐 때문에, `setTimeout`의 콜백 함수는 루프가 실행된 후에 호출돼요. 첫 번째의 루프의 변수 `i`는 `var` 키워드를 사용해 선언되어 전역 값이 돼요. 루프 동안, 단항 연산자 `++`를 사용해 매번 `i`의 값을 1씩 증가시켰어요. `setTimeout`콜백 함수가 호출되기까지, 첫 번째 예시에서의 `i`는 3이에요.',
      '두 번째 루프에서, 변수 `i`는 `let` 키워드를 사용해 선언되었어요: `let`(그리고 `const`) 키워드로 선언된 변수는 블록-스코프예요(블록은 { } 사이의 모든 것). 각각을 반복하는 동안, `i`는 새로운 값을 갖게 되고, 각각의 값은 루프 스코프 안에 있어요.',
    ],
  },
  {
    question: '다음 코드의 출력 결과로 옳은 것은?',
    code: `
    const shape = {
      radius: 10,
      diameter() {
        return this.radius * 2;
      },
      perimeter: () => 2 * Math.PI * this.radius,
    };
    
    console.log(shape.diameter());
    console.log(shape.perimeter());
    `,
    choices: ['20 그리고 62.83185307179586', '20 그리고 NaN', '20 그리고 63', 'NaN 그리고 63'],
    answer: 1,
    commentary: [
      '`diameter의` 값은 일반 함수지만, `perimeter의` 값은 화살표 함수라는 점을 유의하세요.',
      '화살표 함수에서 `this` 키워드는 일반 함수와는 다르게 현재 주변 스코프를 참조해요! 이것은 `perimeter`를 부를 때 `shape` 객체가 아닌 그것을 둘러싼 스코프(예를 들면 `window`)를 참조하는 것을 의미해요.',
      '그 객체에는 `radius`라는 값은 없기 때문에 `undefined`를 반환해요.',
    ],
  },
  {
    question: '다음 코드의 출력 결과로 옳은 것은?',
    code: `
    +true;
    !'Sky';
    `,
    choices: ['1 그리고 false', 'false 그리고 NaN', 'false 그리고 false'],
    answer: 0,
    commentary: [
      '단항 더하기는 피연산자를 숫자로 변환하려 해요. `true`는 1이고, `false`는 0이에요.',
      '문자열 `Sky`는 참 같은 값이에요. 사실 우리가 물어본 건 "참 같은 이 값은 거짓인가?"예요. 이건 false를 반환해요.',
    ],
  },
  {
    question: '다음 코드에 대한 설명으로 옳은 것은?',
    code: `
    const bird = {
      size: 'small',
    };
    
    const mouse = {
      name: 'Mickey',
      small: true,
    };
    `,
    choices: [
      'mouse.bird.size 는 유효하지 않다.',
      'mouse[bird.size] 는 유효하지 않다.',
      "mouse[bird['size']] 는 유효하지 않다.",
      '모두 유효하다.',
    ],
    answer: 0,
    commentary: [
      'JavaScript에서 모든 객체의 키는 문자열이에요(심볼이 아닌 한). 객체의 키를 문자열 형 으로 입력하지 않더라도, 항상 내부적으로 문자열로 변환돼요.',
      'JavaScript는 문장을 해석(또는 분)해요. 대괄호 표기를 사용하면 첫 번째 열린 대괄호 `[`를 보고 닫힌 대괄호 `]`를 찾을 때까지 진행해요. 다 찾은 후에만 문장을 평가할 거예요.',
      "`mouse[bird.size]`: 먼저 `'small'`인 `bird.size`를 평가해요. `mouse['small']` 은 `true`를 반환해요.",
      "그러나 이것은 점 표기법에서 발생하지 않아요. `mouse`가 `bird`라고 불리는 키를 가지고 있지 않기 때문에, `mouse.bird`는 `undefined`임을 의미해요. 그다음에, 점 표기법을 사용해 `size`를 물어봐요: `mouse.bird.size`. `mouse.bird`는 `undefined`이기 때문에, 사실 우리가 물어보는 건 `undefined.size`에요. 이건 유효하지 않아요, 그리고 `Cannot read property 'size' of undefined`와 비슷한 오류를 던질 거예요.",
    ],
  },
]
