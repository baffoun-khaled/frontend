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
          <span>Title : {album.title}</span>
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
      ))}
    </>
  )
}

export default AlbumScreen
