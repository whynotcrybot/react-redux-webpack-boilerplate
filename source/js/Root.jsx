import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import createRoutes from './routes'

import '../style/index.global.css'

const Root = (props) => {
  return (
    <Provider store={props.store}>
      <Router>
        {createRoutes()}
      </Router>
    </Provider>
  )
}

export default Root
