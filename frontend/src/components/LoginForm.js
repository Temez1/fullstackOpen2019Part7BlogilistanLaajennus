/* eslint-disable no-unused-vars */
import React from "react"
import { connect } from "react-redux"
import { setUser } from "../reducers/userReducer"
import { newNotification } from "../reducers/notificiationReducer"

import loginService from "../services/login"
import blogService from "../services/blogs"

const LoginForm = ( props ) => {

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({ username:props.usernameField.value, password:props.passwordField.value })
      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user))

      blogService.setToken(user.token)
      props.setUser(user)
      props.usernameField.reset()
      props.passwordField.reset()
      props.newNotification("Logged in !")
    } catch (exception) {
      props.newNotification("wrong credentials")
    }
  }

  const { reset: resetName, ...restOfName } = props.usernameField
  const { reset: resetPassword, ...restOfPassword } = props.passwordField
  
  return(
    <div>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input {...restOfName} name="username"/>
        </div>
        <div>
          password
          <input {...restOfPassword} name="password"/>
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  setUser,
  newNotification,
}

export default connect(
  null,
  mapDispatchToProps
)(LoginForm)