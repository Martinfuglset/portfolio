import React from 'react'

function Table({ data }) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
      {data.map(item => (
        <tr>
          <td>{item.name}</td>
          <td>{item.email}</td>
        </tr>
      ))}
    </table>
  )
}

export default Table