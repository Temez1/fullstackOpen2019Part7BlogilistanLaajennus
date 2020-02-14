import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import blogService from "./services/blogs"
import loginService from "./services/login"

import BlogList from "./components/BlogList"
import Notification from "./components/Notification"
import LoginForm from "./components/LoginForm"
import BlogForm from "./components/BlogForm"
import Togglable from "./components/Togglable"

import useField from "./hooks/index"

import { newNotification } from "./reducers/notificiationReducer"
import { initalizeBlogs } from "./reducers/blogsReducer"

const App = (props) => {
  const blogTitle = useField("text")
  const username = useField("text")
  const password = useField("password")
  const [user, setUser] = useState(null)

  useEffect(() => {
    props.initalizeBlogs()
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogout = () => {
    window.localStorage.removeItem("loggedBlogappUser")
    props.newNotification("Logged out!")
  }

  return (
    <div>
      <h1>Blogs</h1>

      <Notification/>

      <h2>Login</h2>

      { user === null
        ? <Togglable buttonLabel="login">
          <LoginForm
            usernameField={username}
            passwordField={password}
          />
        </Togglable>
        : <div>
          <p> {user.name} logged in</p>
          <Togglable buttonLabel="New blog">
            <BlogForm blogTitleField={blogTitle} />
          </Togglable>
          <button onClick={handleLogout}>logout</button>
        </div>
      }
      <BlogList />
    </div>
  )
}

export default connect(null, { newNotification, initalizeBlogs})(App)
