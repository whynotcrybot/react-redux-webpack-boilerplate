import React from 'react'
import { connect } from 'react-redux'
import { countUp, countDown } from 'ducks/counter'

const Counter = function (props) {
  return (
    <div>
      <h1>{'Redux Counter'}</h1>
      <p>
        {`
          We already counted ${props.counter.counts}
          and have a current value of ${props.counter.counter}
        `}
      </p>
      <button onClick={props.countUp}>{'count up'}</button>
      <button onClick={props.countDown}>{'count down'}</button>
    </div>
  )
}

export default connect(
  function (state) {
    return {
      counter: state.counter
    }
  },
  function (dispatch) {
    return {
      countUp: () => dispatch(countUp()),
      countDown: () => dispatch(countDown())
    }
  }
)(Counter)
