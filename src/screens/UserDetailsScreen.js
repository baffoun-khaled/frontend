import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'

const UserDetails = ({ match }) => {
  const [user, setUser] = useState([])
  const [userAlbums, setUserAlbums] = useState([])
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetchPhoto()
    fetchData()
    fetchUserAlbumData()
  }, [])

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${match.params.id}`
    )

    setUser(data)
  }
  const fetchPhoto = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/photos'
    )
    setPhotos(data)
  }

  const fetchUserAlbumData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${match.params.id}`
    )

    setUserAlbums(data)
  }
  return (
    <div>
      <div className='baf tracking-in-expand-fwd'>{user.name}</div>
      <div>{user.username}</div>
      <div>{user.email}</div>
      <div>{user?.address?.street}</div>
      <div>{user?.address?.suite}</div>
      <div>{user?.address?.city}</div>
      <div>{user?.address?.zipcode}</div>
      <div>{user?.address?.geo?.lat}</div>
      <div>{user?.address?.geo?.lng}</div>
      <div>{user.phone}</div>
      <div>{user.website}</div>
      <div>{user?.company?.name}</div>
      <div>{user?.company?.catchPhrase}</div>
      <div>{user?.company?.bs}</div>
      <h2>User albumss</h2>
      <div>
        {userAlbums.map((album) => {
          return (
            <div className='album-card' key={album.id}>
              <p>albums title: {album.title}</p>
              <div>
                thambnails
                <div className='thamb'>
                  {photos &&
                    photos
                      .filter((el) => el.albumId === album.id)
                      .map((el) => <img src={el.thumbnailUrl} />)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserDetails
