const notificationReducer = (state=null, action) => {
  switch (action.type) {
    case "NEW_NOTIFICATION":
      return action.notification
    case "CLEAR":
      return action.notification
      
    default:
      return state
  }
}

export const newNotification = (notification, timeout=5) => {
  return async dispatch => {
    setTimeout(() => dispatch(clearNotification()), timeout * 1000) 
    dispatch({
      type:"NEW_NOTIFICATION",
      notification
    })
  }
}

const clearNotification = () => {
  return {
    type: "CLEAR",
    notification: null,
  }
}
export default notificationReducer