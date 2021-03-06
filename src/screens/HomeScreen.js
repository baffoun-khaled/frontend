import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
      <h1 className='Lists Titles tracking-in-expand-fwd'>List of our users</h1>
      <div className='app-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Street</th>
              <th>Suite</th>
              <th>City</th>
              <th>ZipCode</th>
              <th>lat</th>
              <th>Lng</th>
              <th>Phone</th>
              <th>Website</th>
              <th>CompanyName</th>
              <th>CatchPhrase</th>
              <th>bs</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className='user-info'>
                  <Link to={`/user/${user.id}`}>{user.name}</Link>
                </td>
                <td className='user-info'>{user.username}</td>
                <td className='user-info'>{user.email}</td>
                <td className='user-info'>{user.address.street}</td>
                <td className='user-info'>{user.address.suite}</td>
                <td className='user-info'>{user.address.city}</td>
                <td className='user-info'>{user.address.zipcode}</td>
                <td className='user-info'>{user.address.geo.lat}</td>
                <td className='user-info'>{user.address.geo.lng}</td>
                <td className='user-info'>{user.phone}</td>
                <td className='user-info'>{user.website}</td>
                <td className='user-info'>{user.company.name}</td>
                <td className='user-info'>{user.company.catchPhrase}</td>
                <td className='user-info'>{user.company.bs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default HomeScreen
