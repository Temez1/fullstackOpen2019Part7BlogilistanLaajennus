import React from "react"

const UsersTableUser = ({user}) => (
  <tr>
    <td>{user.name}</td>
    <td>{user.blogs.length}</td>
  </tr>
)

export default UsersTableUser
