import React from "react"
import { connect } from "react-redux"
import { create } from "../reducers/blogsReducer"
import { newNotification } from "../reducers/notificiationReducer"

const BlogForm = (props) => {

  const addBlog = (event) => {
    event.preventDefault()
    const noteObject = {
      title: props.blogTitleField.value,
      author: "test",
      url: "test.fi",
    }
    props.create(noteObject)
    props.blogTitleField.reset()
    props.newNotification("Added new blog!")
  }

  // Object destructing to get everything but reset property
  const { reset, ...rest } = props.blogTitleField

  return(
    <form onSubmit={addBlog}>
      <div>
          title
        <input {...rest} />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

const mapDispatchToProps = {
  create,
  newNotification,
}

export default connect(
  null,
  mapDispatchToProps
)(BlogForm)
