/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { setUser } from "../reducers/userReducer"

const LoginForm = ( props ) => {

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({ username:username.value, password:password.value })

      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user))

      blogService.setToken(user.token)
      props.setUser(user)
      username.reset()
      password.reset()
      props.newNotification("Logged in !")
    } catch (exception) {
      props.newNotification("wrong credentials")
    }
  }

  const { reset: resetName, ...restOfName } = usernameField
  const { reset: resetPassword, ...restOfPassword } = passwordField
  
  return(
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
  )
}

const mapDispatchToProps = {
  create,
  newNotification,
}

LoginForm.propTypes = {
  loginHandler: PropTypes.func.isRequired,
}



export default connect(
  null,
  mapDispatchToProps
)(LoginForm)