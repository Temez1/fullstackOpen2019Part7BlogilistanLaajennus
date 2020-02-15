import React from "react"
import { connect } from "react-redux"
import { newNotification } from "../reducers/notificiationReducer"

const LogoutButton = (props) => {
  const handleLogout = () => {
    window.localStorage.removeItem("loggedBlogappUser")
    props.newNotification("Logged out!")
  }

  return(
    <button onClick={handleLogout}>logout</button>
  )
}


export default connect(null, { newNotification })(LogoutButton)