import axios from 'axios'
import React, { useState, useEffect } from 'react'

const AlbumScreen = () => {
  const [albums, setAlbums] = useState([])
  const [photos, setPhotos] = useState([])

  const fetchData = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/albums'
    )

    setAlbums(data)
  }
  const fetchPhoto = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/photos'
    )

    setPhotos(data)
  }
  useEffect(async () => {
    await fetchPhoto()
    await fetchData()
    
  }, [])

  return (
    <>
      <h1>List of our Albums</h1>
      {albums.map((album) => (
        <div key={album.id}>
          <img src={photos[album.id].thumbnailUrl}></img>
          <span>Title : {album.title}</span>
        </div>
      ))}
    </>
  )
}

export default AlbumScreen
