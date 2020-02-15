import React, {useEffect } from "react"
import { connect } from "react-redux"
import {
  BrowserRouter as Router,
  Route, Link
} from "react-router-dom"

import blogService from "./services/blogs"

import BlogList from "./components/BlogList"
import Notification from "./components/Notification"
import LoginForm from "./components/LoginForm"
import BlogForm from "./components/BlogForm"
import Togglable from "./components/Togglable"
import LogoutButton from "./components/LogoutButton"
import useField from "./hooks/index"

import { initalizeBlogs } from "./reducers/blogsReducer"
import { setUser } from "./reducers/userReducer"

const App = (props) => {
  const blogTitle = useField("text")
  const username = useField("text")
  const password = useField("password")

  useEffect(() => {
    props.initalizeBlogs()
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      props.setUser(user)
      blogService.setToken(user.token)
    }
  }, [])
  
  return (
    <div>
      <Router>
        <h1>Blogs</h1>

        <Notification/>
        <Route exact path="/" render={() => 
        { return (
          <div>
            { props.user === null
              ? 
              <div>
                <h2>Login</h2>
                <Togglable buttonLabel="login">
                  <LoginForm
                    usernameField={username}
                    passwordField={password}
                  />
                </Togglable>
              </div>
              : 
              <div>
                <p> {props.user.name} logged in</p>
                <Togglable buttonLabel="New blog">
                  <BlogForm blogTitleField={blogTitle} />
                </Togglable>
                <LogoutButton />
              </div>
            }
            <BlogList />
          </div>
        )}} /> 

      </Router>
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    user: state.user
  }
)


export default connect(mapStateToProps, { initalizeBlogs, setUser })(App)
