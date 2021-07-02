import React from 'react'
import RecentPostFeeds from './components/RecentPostFeeds'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
const App = () => {
  return (
    <>
      <h1>Deploy me on GCP 😱</h1>
      <BrowserRouter>
        <Switch>


          <Route exact path="/home">
            <RecentPostFeeds/>
          </Route>
            
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/register">
            <Register/>
          </Route>
      
      
        </Switch>


      </BrowserRouter>
    </>
  )
}

export default App
