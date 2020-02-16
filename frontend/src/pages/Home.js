import React from "react"
import { connect } from "react-redux"

import LoginForm from "../components/LoginForm"
import BlogForm from "../components/BlogForm"
import Togglable from "../components/Togglable"
import LogoutButton from "../components/LogoutButton"
import BlogList from "../components/BlogList"

const HomePage = (props) => {
  return (
    <div>
    { props.user === null
      ? 
      <div>
        <h2>Login</h2>
        <Togglable buttonLabel="login">
          <LoginForm
            usernameField={props.username}
            passwordField={props.password}
          />
        </Togglable>
      </div>
      : 
      <div>
        <p> {props.user.name} logged in</p>
        <Togglable buttonLabel="New blog">
          <BlogForm blogTitleField={props.blogTitle} />
        </Togglable>
        <LogoutButton />
      </div>
    }
    <BlogList />
  </div>
  )
}

const mapStateToProps = (state) => (
  {
    user: state.user
  }
)

export default connect(mapStateToProps, null)(HomePage)