import React from "react"
import { connect } from "react-redux"

const Notification = (props) => {
  if (props.notification === null){
    return null
  }

  return(
    <div style={notificationStyleDefault}>
      { props.notification }
    </div>
  )
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

const mapStateToProps = (state) => (
  {
    notification: state.notification
  }
)

export default connect(
  mapStateToProps,
  null
)(Notification)