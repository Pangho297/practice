import * as types from '../actions/ActionType';

// 초기상태를 정의합니다.
const initialState = {
  counters: [
    {
      color: 'black',
      number: 0
    }
  ]
};

// 리듀서 함수를 정의합니다.
function counter(state = initialState, action) {
  // 레퍼런스 생성
  const { counters } = state;

  switch (action.type) {
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0
          }
        ]
      };
    // slice를 이용하여 맨 마지막 카운터를 제외시킵니다.
    case types.REMOVE:
      return {
        counters: counters.slice(0, counters.length - 1)
      };

    /*
      컴포넌트의 state 안에있는 배열을 다룰때와 동일하게 기존 배열에 직접 push() 혹은 pop()을 하면 안돼고
      ...(spread문법)을 사용하거나 .slice()함수를 사용하여 배열을 잘라 새로 생성해야 합니다.
    
      이 과정에서 state.counters를 자주 사용하므로 이를 줄여서 사용하여 코드를 줄이기 위해
      상단에 레퍼런스를 만들어서 사용하면 코드가 깔끔해집니다.
    
      앞으로도 계속해서 구현할 숫자 더하기, 빼기 그리고 색상변경을 위한 부분들은
      코드가 복잡해질 수도 있지만 위 코드와 똑같은 원리입니다.
    */

    // 리듀서 함수에 더하기, 빼기, 색상변경 구현

    // action.index 번째 카운터의 number에 1을 더합니다.
    case types.INCREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index), // 0 ~ action.index 사이의 아이템들을 잘라와서 이 자리에 넣는다.
          {
            ...counters[action.index], // 기존값은 유지하면서
            number: counters[action.index].number + 1 // number 값을 덮어쓴다
          },
          ...counters.slice(action.index + 1, counters.length) // action.index + 1 ~ 마지막까지 잘라온다
        ]
      };

    //action.index 번째 카운터의 number에 1을 뺍니다.
    case types.DECREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number - 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      }

    // action.index 번째 카운터의 색상을 변경합니다.
    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            color: action.color
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    default:
      return state;
  }
};



export default counter