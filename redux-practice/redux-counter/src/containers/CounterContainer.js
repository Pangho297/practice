import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';
/*
  컨테이너 컴포넌트를 스토어에 연결시켜주기 위해 react-redux의 connect함수를 로드
  이 함수의 파라미터로 컴포넌트에 연결시킬 상태와 액션함수들을 전달해주면
  컴포넌트를 리덕스 스토어에 연결시키는 또다른 함수를 반환한다.
  이 과정에서 리턴된 함수 안에 프리젠테이셔널 컴포넌트를 파라미터로 전달해주면
  리덕스 스토어에 연결된 컴포넌트가 새로 만들어집니다.

  컴포넌트에 연결시킬 상태와 액션함수를 정의할땐 각각 함수를 만들어줘야하는데요
  상태를 연결시킬땐 state, 액션함수를 연결시킬땐 dispatch를 파라미터로 전달받는 함수를 만들어서
  객체를 반환하면 이를 props로 사용할 수 있게됩니다.
*/

// 스토어 안의 상태값을 props로 연결해줍니다.
const mapStateToProps = (state) => ({
  color: state.color, // 서브 리듀서를 사용한다면 state.colorData.color로 수정
  number: state.number // 서브 리듀서를 사용한다면 state.numberData.number로 수정
})

/*
  액션 생성자를 사용하여 액션을 생성하고
  해당 액션을 dispatch하는 함수를 만들은 후 이를 props로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decremnet()),
  onSetColor: () => {
    const color = getRandomColor()
    dispatch(actions.setColor(color));
  }
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역활을 합니다.

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;