import * as types from '../actions/ActionType';

// 초기상태를 정의합니다.
const initialState = {
  color: 'black',
  number: 0
};

/*
  이 리듀서의 초기상태로는 color값과 number값이 있습니다.

  이제 리듀서 함수를 작성할건데요 리듀서 함수는 state와 action을 파라미터로 가지는 함수이며
  그 내부에서 switch(또는 if)문을 통하여 action.type에 따라 상태에 따른 변화를 일으키면 됩니다.

  여기서 주의하실점은 state를 직접 수정하면 절대 안되고
  기존 state값에 엎어쓴 새 상태객체를 만드는 방식으로 해야합니다.
*/

/*
  리듀서 함수를 정의합니다. 리듀서는 state와 action을 파라미터로 받습니다
  state가 undefined일때 (스토어가 생성될 때) state의 기본값을 initialState로 사용합니다
  action.type에 따라 다른 작업을 하고 새 상태를 만들어서 반환합니다
  이 때 주의할점은 state를 직접 수정하면 안되고
  기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야합니다
*/

function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
        // 위 코드는 아래 주석 처리된 코드와 같은 역활, 객체를 복사한다 
        /* 
          Object.assign({}, state, {
            number: state.number + 1
          });
        */
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
};

export default counter;


/*
  color.js, number.js는 서브 리듀서입니다
  지금은 이 index.js에 카운트하는 액션과 색상을 바꾸는 액션이 하나로 합쳐져 사용되고 있지만
  서브 리듀서로 만들어 나눠 사용할 경우 아래의  // 주석처리된 코드를 참조해 주세요
*/

// import number from './number';
// import color from './color';

// import { combineReducers } from 'redux';

/*
  서브 리듀서들을 하나로 합칩니다.
  combineReducers를 실행하고나면 나중에 스토어의 형태가
  파라미터로 전달한 객체의 모양대로 만들어집니다.
  지금의 경우:
  {
    numberData: {
      number: 0
    },
    colorData: {
      color: 'black'
    }
  }
  로 만들어집니다.
*/

// const reducers = combineReducers({
//   numberData: number,
//   colorData: color
// });

// export default reducers;

/*
  combineReducers는 여러개의 서브리듀서를 하나로 합쳐줍니다.
  이 과정에서 함수에 객체를 전달하게 되는데
  이 객체의 구조에 따라 합쳐진 리듀서의 상태의 구조가 만들어집니다

  때문에 서브 리듀서를 사용한다면 현재 만들어진 CounterContainer컴포넌트의
  mapStatetoProps 함수를 수정해야합니다.
*/