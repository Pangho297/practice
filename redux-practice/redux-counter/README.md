모든 내용은 VELOPERT.LOG를 보고 개인적으로 공부하기위해 필기, 실습한 예재들입니다.

이 브렌치는 Redux를 통한 React 어플리케이션 상태관리: 2장 멀티 카운터 만들기 글을 보고 만들어진 내용입니다.

## 개발자 도구 사용하기

### 확장 프로그램 설치

리덕스 개발자도구를 사용하기 위해서는 크롬 또는 파이어폭스를 사용해야 합니다.   
[리덕스 개발자도구(크롬)](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)   
[리덕스 개발자도구(파이어폭스)](https://addons.mozilla.org/en-US/firefox/addon/remotedev/)

개발자도구 확장 프로그램을 설치했다면 `src/index.js`파일을 수정합니다.   
수정 내용은 해당 경로를 통해 확인할 수 있습니다.

## 여러개의 카운터 예제 동시에 다루기

여러개의 카운터를 다루기 위해 ActionTypes에 CREATE와 REMOVE 추가합니다.

### Action 고치기

`src/action/ActionType.js`를 수정했다면   
`CREATE`, `REMOVE`를 위한 액션 생성자를 만들어주고 기존 액션 생성자들은 전체적으로 수정되어야 합니다.


해당 액션들이 특정 카운터를 조작하도록 설정하므로 `index`값이 액션객체에 포함되어야 합니다.   
수정된 내용은 `src/action/index.js`에서 확인할 수 있습니다.

### Reducers 고치기

1장에서 만들었던 리듀서들과는 작동방식이 다르므로   
reducers 디렉토리 안에 만들어두었던 `color.js`, `number.js`를 삭제하고   
`index.js`파일의 내용을 비우고 새로 작성하세요.   
자세한 내용은 `src/reducers/index.js`에서 확인할 수 있습니다.   
   
배열을 바꾸거나 이런 카운터 예제를 만드는것이 그렇게 어려운 작업은 아니지만   
간단한 작업 하나 하자고 코드를 필요 이상으로 많이 쓰는 기분이 드는것은 사실입니다.   
이번 멀티 카운터를 만들고 나서 `immutable`이란 라이브러리를 사용해보겠습니다.   
이 라이브러리를 사용하면 Reducers 예제와 비슷한 작업을 더욱 가독성 높고 짧게 구현할 수 있게 해줍니다.

### 프리젠테이셔널 컴포넌트 만들기

여러개의 카운터를 다루기 위해서 카운터 생성.제거를 담당할 `Buttons` 컴포넌트와   
여러개의 카운터를 렌더링해줄 `CounterList`를 만들어보겠습니다.   
   
`Buttons` 컴포넌트에서는 새 카운터를 생성하는 `onCreate` 함수   
그리고 맨 마지막 카운터를 제거시킬 `onRemove` 함수를 porps로 전달받습니다.   
자세한 내용은 `src/components/buttons.js`에서 확인할 수 있습니다.   
   
`CounterList` 컴포넌트에서는 카운터 객체들의 배열 `counters`와   
카운터를 조작하는 `onIncrement`, `onDecrement`, `onSetColor` 함수를 props로 전달받습니다.   
`counters`를 `counter` 컴포넌트 배열로 변환하는 과정에선 key를 배열의 index로 설정하고   
index값도 컴포넌트에 props로 전달해줍니다. 그리고 `color`값과 `number`값을 각각 설정하는 대신에   
`{...counter}`으로 객체를 풀어서 한꺼번에 전달해줄수도 있습니다.   
자세한 내용은 `src/components/CounterList.js`에서 확인할 수 있습니다.   
   
마지막으로 `Counter` 컴포넌트를 수정해줍니다.   
방금 `CounterList`에서 전달한 `index`를 각 이벤트가 실행될 때   
함수의 파라미터로 넣어서 실행하게 해주면 됩니다.   
자세한 내용은 `src/components/Counter.js`에서 확인할 수 있습니다.

### 컨테이너 컴포넌트 만들기

기존의 `CounterContainer`는 쓸모가 없어졌으니 삭제해주세요   
이번에 만들 컨테이너 컴포넌트는 `CounterListContainer`입니다.   
그리고 `Buttons`의 경우엔 따로 컨테이너 컴포넌트를 만들어주지 않고   
`App` 컴포넌트를 리덕스에 연결시켜서 액션 함수들을 연결시켜주고   
해당 함수들을 `Buttons`컴포넌트에 전달해주도록 만들어보겠습니다.   
자세한 내용은 `src/containers/CounterListContainer.js`에서 확인할 수 있습니다.   
   
마지막으로 `App` 컴포넌트를 리덕스에 연결시켜주도록 수정합니다.   
이 컴포넌트에서는 스토어에서 필요한 값이 없으니   
`mapStateToPorps`는 `null`로 설정하고 버튼을위한 `mapDispatchToProps`를 만듭니다.   
`onCreate`와 `onRemove`를 만들고 이를 `Button`컴포넌트의 props로 전달합니다.   
자세한 내용은 `src/containers/App.js`에서 확인할 수 있습니다.