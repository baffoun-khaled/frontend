import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserDetails = ({ match }) => {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${match.params.id}`
    )

    setUser(data)
  }
  return (
    <div>
      <h2>User Details</h2>
      <div>{user.name}</div>
      <div>{user.phone}</div>
      <div>{user.email}</div>
      <div>{user?.company?.name}</div>
      <div>{user.website}</div>
    </div>
  )
}

export default UserDetails
