import React from "react"
import { connect } from "react-redux"
import Blog from "./Blog"


const BlogList = (props) => (
  <div>
    {props.blogs.map(blog => <Blog blog = { blog } key={blog.id}/>)}
  </div>
)

const mapStateToProps = (state) => (
  {
    blogs: state.blogs
  }
)

export default connect(
  mapStateToProps,
  null
)(BlogList)