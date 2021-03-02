import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

// 스토어 안의 상태값을 props로 연결해줍니다.
const mapStateToProps = (state) => ({
  counters: state.counters
});

/*
  액션 생성자를 사용하여 액션을 생성하고,
  해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props로 연결해줍니다.
*/

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (index) => dispatch(actions.increment(index)),
  onDecrement: (index) => dispatch(actions.decremnet(index)),
  onSetColor: (index) => {
    const color = getRandomColor();
    dispatch(actions.setColor({ index, color }))
  }
})

// 데이터와 함수들이 props로 붙은 컴포넌트 생성
const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);

export default CounterListContainer