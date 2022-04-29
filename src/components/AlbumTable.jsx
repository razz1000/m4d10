import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap"
import { useParams, useNavigate } from 'react-router-dom'

let AlbumTable = () => {
    const params = useParams()

    let [albumSelected, setAlbumSelected] = useState([])

useEffect(() => {
    getSongAlbum()
}, [])


    const getSongAlbum = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + params.songID)
        if (response.ok) {
            const parsedBody = await response.json();
            const tracks = parsedBody.tracks.data
            console.log(parsedBody)
            console.log(tracks)
            setAlbumSelected(tracks)
        }
    } catch (error) {
        console.log(error)
    }
    }


    return (
    albumSelected.map((song, index) => (
        <Table striped bordered hover variant="dark">
   {/*  <thead>
    <tr>
      <th>#</th>
      <th>hello</th>

    </tr>
  </thead> */}
  <tbody>
    <tr>
      <td>{song, index}</td>
      <td>{song.title}</td>
      <td>{song.duration} sec</td>
    </tr>
  </tbody>
</Table> 
  )) 
    )
}

export default AlbumTable