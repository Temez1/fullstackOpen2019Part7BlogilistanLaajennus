import React, {useEffect } from "react"
import { connect } from "react-redux"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

import Notification from "./components/Notification"
import useField from "./hooks/index"

import HomePage from "./pages/Home"

import { initalizeBlogs } from "./reducers/blogsReducer"
import { setUserFromLocalStorage } from "./reducers/userReducer"

const App = (props) => {
  const blogTitle = useField("text")
  const username = useField("text")
  const password = useField("password")

  useEffect(() => {
    props.initalizeBlogs()
  }, [])

  useEffect(() => {
    props.setUserFromLocalStorage()
  }, [])
  
  return (
    <div>
      <Router>
        <h1>Blogs</h1>

        <Notification/>
        <Route exact path="/" render={ () => <HomePage blogTitle={blogTitle} username={username} password={password} />} /> 

      </Router>
    </div>
  )
}




export default connect(null, { initalizeBlogs, setUserFromLocalStorage })(App)
