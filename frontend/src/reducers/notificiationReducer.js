const initialState = {
  message: null,
  style:"default"
}

const notificationReducer = (state=initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "NEW_NOTIFICATION":
      return action.notification
    case "CLEAR_MESSAGE":
      return action.notification
    
    default:
      return state
  }
}

export const newNotification = (message, style="default", timeout=5) => {
  return async dispatch => {
    setTimeout(() => dispatch(clearNotification()), timeout * 1000)
    const styled = pickStyle(style)
    dispatch({
      type:"NEW_NOTIFICATION",
      notification: {
        message: message,
        style: styled
      }
    })
  }
}

const clearNotification = () => {
  return {
    type: "CLEAR_MESSAGE",
    notification: {
      message: null,
      style: state.style
  }
}

const pickStyle = (style) => {

}
export default notificationReducer