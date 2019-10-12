import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom'

import Tasks from './components/Tasks'
import Json from './components/Json'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/todo' exact component={Tasks} />
        <Route path='/json' exact component={Json} />
      </BrowserRouter>
    )
  }
}

export default App;