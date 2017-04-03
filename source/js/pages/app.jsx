import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Flex } from 'reflexbox'

import Routes from './routes'
import Navigation from '../components/Navigation'

import '../../style/index.global.css'

const Root = (props) => {
  return (
    <Provider store={props.store}>
      <Router>
        <Flex>
          <Navigation />
          <Routes />
        </Flex>
      </Router>
    </Provider>
  )
}

export default Root
