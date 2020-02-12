import React from "react"
import { connect } from "react-redux"

const Notification = (props) => {
  if (props.notification === null){
    return null
  }

  const notificationStyleSuccess = {
    padding: 10,
    margin: 10,
    fontSize: 30,
    borderTopStyle: "solid",
    borderBottomStyle: "solid",
    borderWidth: 2,
    borderColor: "green"
  }

  const notificationStyleFail = {
    padding: 10,
    margin: 10,
    fontSize: 30,
    borderTopStyle: "solid",
    borderBottomStyle: "solid",
    borderWidth: 2,
    borderColor: "red"
  }

  const notificationStyleDefault = {
    padding: 10,
    margin: 10,
    fontSize: 30,
    borderTopStyle: "solid",
    borderBottomStyle: "solid",
    borderWidth: 2,
    borderColor: "black"
  }

  const notificationStyles = {
    notificationStyleSuccess,
    notificationStyleFail,
    notificationStyleDefault
  }

  const notificationStyle = (style) => {
    if (style === "success"){
      return notificationStyles.notificationStyleSuccess
    }

    else if (style === "fail"){
      return notificationStyles.notificationStyleFail
    }

    else if (style === "default"){
      return notificationStyles.notificationStyleDefault
    }

    else {
      console.log("You didn't pass valid style, using default style")
      return notificationStyles.notificationStyleDefault
    }
  }

  return(
    <div style={notificationStyleDefault}>
      { props.notification }
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    notification: state.notification
  }
)

export default connect(
  mapStateToProps,
  null
)(Notification)