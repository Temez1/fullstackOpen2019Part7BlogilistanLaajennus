import blogService from "../services/blogs"

const userReducer = (state=null, action) => {
  switch(action.type) {
    case "SET_USER":
      return action.user
      
    default:
      return state
  }
}

export const setUser = (user) => (
  (dispatch) => {
    dispatch({
      type: "SET_USER",
      user
    })
  }
)

export const setUserFromLocalStorage = () => {
  return (dispatch) => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
      blogService.setToken(user.token)
    }
  }
}

export default userReducer
