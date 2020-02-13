import blogService from "../services/blogs"

const blogsReducer = (state=[], action) => {
  switch(action.type) {
    case "INIT_BLOGS":
      return action.data
    case "ADD_BLOG":
      return [...state, action.data]
    default:
      return state
  }
}

export const initalizeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch({
      type: "INIT_BLOGS",
      data: blogs
    })
  } 
}

export const create = (data) => {
  return async (dispatch) => {
    const newBlog = await blogService.create(data)
    dispatch({
      type: "ADD_BLOG",
      data: newBlog
    })
  }
}

export default blogsReducer