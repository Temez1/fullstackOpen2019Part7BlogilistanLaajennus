import React from "react"
import { connect } from "react-redux"

const UsersPage = (props) => {
  console.log(props.users)
  return (
    <div>
      <h2> Users </h2>
      <table>
        <thead>
          <tr>
            <td></td>
            <td> Blogs created </td>
          </tr>
        </thead>
        <tbody>
          { props.users && props.users.map((user) => <tr> <td> {user.name} </td> <td>{user.blogs.length}</td> </tr>) }
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    users: state.users
  }
)

export default connect(mapStateToProps, null)(UsersPage)