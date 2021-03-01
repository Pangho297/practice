/*
  action 객체를 만드는 액션 생성자들을 선언합니다. (ㅁction creators)
*/

import * as types from './ActionType';

// increment와 decrement는 어차피 1씩 더하고 빼기 때문에 따로 필요한 값 없이
// type만 지정이된 객체를 만들어 줍니다.
export const increment = () => ({
  type: types.INCREMENT
});

export const decremnet = () => ({
  type: types.DECREMENT
});

// 다른 액션 생성자들과는 달리, 파라미터를 가지고 있습니다.
export const setColor = (color) => ({
  type: types.SET_COLOR,
  color
});

/*
  리덕스의 3가지 원칙 중에서 변화는 언제나 순수(Pure)함수로 이루어져야 한다는 것을 기억하세요
  더블클릭을 하면 색이 랜덤으로 변하지만 그렇다고 우리가 액션을 RANDOMIZE_COLOR, randomizeColor
  이런식으로 만들면 안됩니다. 왜냐하면 랜덤함수는 실행될때마다 다른 값을 반환하기 때문에 순수하지 않기 때문이죠
*/