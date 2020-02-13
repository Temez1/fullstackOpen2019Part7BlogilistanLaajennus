import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import blogService from "./services/blogs"
import loginService from "./services/login"

import Blog from "./components/Blog"
import Notification from "./components/Notification"
import LoginForm from "./components/LoginForm"
import BlogForm from "./components/BlogForm"
import Togglable from "./components/Togglable"

import useField from "./hooks/index"

import { newNotification } from "./reducers/notificiationReducer"
import { initalizeBlogs } from "./reducers/blogsReducer"

const App = (props) => {
  const [blogs, setBlogs] = useState([])
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

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({ username:username.value, password:password.value })

      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user))

      blogService.setToken(user.token)
      setUser(user)
      username.reset()
      password.reset()
      props.newNotification("Logged in !")
    } catch (exception) {
      props.newNotification("wrong credentials")
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem("loggedBlogappUser")
    props.newNotification("Logged out!")
  }

  const addBlog = (event) => {
    event.preventDefault()
    const noteObject = {
      title: blogTitle.value,
      author: "test",
      url: "test.fi",
    }

    blogService
      .create(noteObject)
      .then(data => {
        setBlogs(blogs.concat(data))
        blogTitle.reset()
      })
    props.newNotification("Added new blog!")
  }
  console.log(props)
  return (
    <div>
      <h1>Blogs</h1>

      <Notification/>

      <h2>Login</h2>

      { user === null
        ? <Togglable buttonLabel="login">
          <LoginForm
            loginHandler={handleLogin}
            usernameField={username}
            passwordField={password}
          />
        </Togglable>
        : <div>
          <p> {user.name} logged in</p>
          <Togglable buttonLabel="New blog">
            <BlogForm
              blogFormHandler={addBlog}
              blogTitleField={blogTitle}
            />
          </Togglable>
          <button onClick={handleLogout}>logout</button>
        </div>
      }
      {props.blogs.map(blog => <Blog blog = { blog } key={blog.id}/>)}
    </div>
  )
}

export default connect(null, { newNotification, initalizeBlogs })(App)
