import React from 'react'
import RecentPostFeeds from './components/RecentPostFeeds'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import NewPost from './components/NewPost'
import NavBar from './components/navBar/NavBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import SideNavBar from './components/navBar/SideNavBar'


const App = () => {
  return (
    <>
      {/* <h1>Deploy me on GCP 😱</h1> */}


      <BrowserRouter>
        <NavBar />
        {/* <SideNavBar/> */}
        <Switch>

          <Route exact path="/">
            <RecentPostFeeds />
          </Route>

          <Route path="/home">
            <RecentPostFeeds />
          </Route>

          <Route path="/new">
            <NewPost />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>


        </Switch>

        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
