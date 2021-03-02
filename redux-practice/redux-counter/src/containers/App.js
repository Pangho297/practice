import React from 'react';
import Buttons from '../components/Buttons';
import CounterListContainer from './CounterListContainer'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getRandomColor } from '../utils';

class App extends React.Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div className="App">
        <Buttons
          onCreate={onCreate}
          onRemove={onRemove}
        />
        <CounterListContainer />
      </div>
    );
  }
}


// 액션함수 준비
const mapToDispatch = (dispatch) => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: (index) => dispatch(actions.remove(index))
});

// 리덕스에 연결을 시키고 내보낸다.
export default connect(null, mapToDispatch)(App);

/*
  이번에는 이미 만들어진 컴포넌트를 불러와서 이를 리덕스에 연결시킨게 아니라
  파일 하나에서 컴포넌트를 정의하고 바로 연결해주었습니다.
  그럴땐 export하는 부분에서 connect를 통해 리덕스에 연결시키면 되겠습니다.
*/