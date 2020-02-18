import React from "react"
import { connect } from "react-redux"
import UsersTableUser from "./UsersTableUser"

const UsersTable = (props) => {
  return(
    <table>
      <thead>
        <tr>
          <td></td>
          <td> Blogs created </td>
        </tr>
      </thead>

      <tbody>
      { props.users.map((user) => <UsersTableUser user={user} key={user.id} /> ) }
      </tbody>
  </table>
  )

}

const mapStateToProps = (state) => (
  {
    users: state.users
  }
)

export default connect(mapStateToProps, null)(UsersTable)
