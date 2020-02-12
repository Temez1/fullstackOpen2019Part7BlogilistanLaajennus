import React from "react"
import { connect } from "react-redux"

const Notification = (props) => {
  console.log(props.notification)
  if (props.notification.message === null){
    return null
  }

  return(
    <div style={props.notification.style}>
      { props.notification.message }
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