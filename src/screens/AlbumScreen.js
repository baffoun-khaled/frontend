import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../App.css'

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
      <h1 className='List Titles tracking-in-expand-fwd'>List of our Albums</h1>
      {albums.map((album) => (
        <div key={album.id}>
          <span className='Mini Titles'>*Title : {album.title}*</span>
          <div>
            <div>
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
