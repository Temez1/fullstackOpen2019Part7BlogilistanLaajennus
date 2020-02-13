const notificationReducer = (state=null, action) => {
  switch (action.type) {
    case "NEW_NOTIFICATION":
      return action.notification
    case "CLEAR_MESSAGE":
      return action.notification
    
    default:
      return state
  }
}

export const newNotification = (message, timeout=5) => {
  return async dispatch => {
    setTimeout(() => dispatch(clearNotification()), timeout * 1000)
    dispatch({
      type:"NEW_NOTIFICATION",
      notification: message
    })
  }
}

const clearNotification = () => (
  {
    type: "CLEAR_MESSAGE",
    notification: null
  }
)


export default notificationReducer