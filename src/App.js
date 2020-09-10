import React from 'react';
import { Router } from 'react-router-dom'
import router from './router'
import history from './router/history'

const App = () => {
  return (
    <Router history={history}>
      {router()}
    </Router>
  )
}

export default App;
