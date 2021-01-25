import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppLayout />
      </Router>
    </Provider>
  )
}

export default App
