모든 내용은 VELOPERT.LOG를 보고 개인적으로 공부하기위해 필기, 실습한 예재들입니다.

이 브렌치는 [React Hooks를 Redux에서 사용하기](https://velog.io/@velopert/react-redux-hooks) 글을 보고 만들어진 내용입니다.

## 프로젝트 생성하기

터미널에서 create-react-app을 이용해 프로젝트를 만들어 줍니다.
```
npx create react-app react-redux-hooks-tutorial
```

해당 프로젝트 디렉토리(react-redux-hooks-tutorial)로 이동 후   
redux, react-redux를 설치합니다.
```
yarn add redux react-redux@next redux-devetools-extension
```
여기서 주의할 점은 react-redux를 설치할 때에는 @next 태그를 붙여야 합니다   
설치가 끝났으면 src디렉토리 안에 다음 디렉토리들을 생성합니다.

- components
- containers
- modules

우리는 ducks 패턴을 사용해서 액션 / 액션 생성 함수 / 리듀서가   
한 파일에 들어있는 리덕스 모듈을 작성할 것입니다.

## 카운터 구현하기

가장 먼저, 카운터를 구현해봅니다. 우선 리덕스 모듈부터 만들어 보세요
구현된 내용은 `src/modules/counter.js`에서 확인할 수 있습니다.   
   
그 다음엔 루트 리듀서를 만드세요. 지금은 리듀서가 하나 뿐이지만   
추후 더 만들 것입니다.   
구현된 내용은 `src/module/index.js`에서 확인할 수 있습니다.   
   
그리고 나서 프로젝트의 엔트리 파일 `index.js`에서 스토어를 만들고   
`Provider`를 통하여 프로젝트에 리덕스를 적용하세요   
구현된 내용은 `src/index.js`에서 확인할 수 있습니다.   
   
이제 카운터의 프리젠테이셔널 컴포넌트를 만드세요   
구현된 내용은 `src/components/Counter.js`에서 확인할 수 있습니다.   
   
여기까지 구현했다면 이제 Hooks를 사용할 차례입니다.

### useSelector

먼저 알아볼 Hook은 `useSelector`입니다.   
이 Hook을 통해 우리는 리덕스 스토어의 상태에 접근할 수 있습니다.   
   
`useSelector`는 다음과 같이 사용합니다.
```
const result : any = useSelector(selector: function, deps : any[])
```

여기서 selector는 우리가 기존에 connect로 사용할 때   
mapStateToProps와 비슷하다고 생각하시면 됩니다.   
   
deps 배열은 어떤 값이 바뀌었을 때 selector를 재정의할지 설정해줍니다.   
deps값을 생략하면 매번 렌더링 될때마다 selector 함수도 새로 정의됩니다.   
   
기존의 useCallback이나 useMemo에서의 deps랑 동일하다고 보시면 됩니다.   
결국 코드를 뜯어보면 useSelector도 내부적으로는 useMemo를 사용하고 있습니다.   
   
selector함수를 선언하는게 큰 리소스는 들어가지 않기 때문에   
기본적으로는 deps를 넣지 않아도 큰 문제는 없습니다.   
   
그런데 최적화에 신경이 쓰인다면 작업하실 때 두번째 파라미터로 `[]`를   
기본적으로 넣는것도 괜찮을 것 같습니다.   
   
그리고 실제 dep 배열에 넣어야되는 값이 보인다면 그걸 넣으면 더욱 좋겠죠   
이 훅을 우리 컴포넌트에서 사용한다면 이렇게 사용하면 됩니다.
```jsx
const counter = useSelector(state => state.counter, []);
```
만약 값 하나만 가져오는게 아니라면 이렇게 만들수도 있겠죠?
```jsx
const { a, b } = useSelector(state => ({ a: state.a, b: state.b }), []);
```

### useDispatch

useDispatch Hook은 컴포넌트 내에서 dispatch를 사용할 수 있게 해줍니다.   
Action 객체를 Reducer로 전달해주는 메소드 입니다.

```jsx
import { useDispatch } from 'react-redux';
const dispatch = useDispatch();
```

위에서 배운것들을 활용해 컨테이너를 구현해봅니다.   
구현된 내용은 `src/containers/CounterContainer.js`에서 확인할 수 있습니다.   
모두 구현했다면 `src/App.js`에 렌더링합니다.