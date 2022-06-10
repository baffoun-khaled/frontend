import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../App.css'

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
      <div className='app-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Street</th>
              <th>City</th>
              <th>ZipCode</th>
              <th>lat</th>
              <th>Lng</th>
              <th>Phone</th>
              <th>CompanyName</th>
              <th>CatchPhrase</th>
              <th>bs</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <div key={user.id}>
                <tr>
                  <td>{user.name}</td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default HomeScreen
