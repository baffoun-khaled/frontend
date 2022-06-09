import axios from 'axios'
import React, { useState, useEffect } from 'react'

const HomeScreen = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )

    setUsers(data)
  }
  return (
    <>
      <h1>List of our users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <ol>
            Name : {user.name}
            UserName : {user.username}
            Email : {user.email}
          </ol>
        </div>
      ))}
    </>
  )
}

export default HomeScreen