import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './app'
import About from './pages/About'
import Sample from './pages/Sample'

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/sample" component={Sample} />
    </div>
  </Router>
)

export default Routes
