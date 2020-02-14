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
export default userReducer