import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>count: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps')
  console.log(state)
  return { value: state.count.value }
}
// アクションに対応するreducerを実行する関数を返しているイメージかな
// const mapDispatchToProps = dispatch => {
//   console.log('mapDispatchToProps')
//   return {
//     increment: () => {
//       console.log('increment')
//       dispatch(increment())
//     },
//     decrement: () => {
//       console.log('decrement')
//       dispatch(decrement())
//     }
//   }
// }

// アクションを返しているイメージだな。こっちの方が直感的にわかりやすい。
// つまり、connectの引数がstateとactionになっているから。
const mapDispatchToProps = { increment, decrement}

// Appのラッパーを作ってstateとactionメソッドをAppにpropsとして渡している感じかな。
export default connect(mapStateToProps, mapDispatchToProps)(App)
