import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import ArtistSelected from "./ArtistSelected"
import Footer from "./Footer"

let ArtistTable = () => {
    const params = useParams()
    
    let [artistSelected, setArtistSelected] = useState(null)


const getArtistInfo = async () => {
    try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + params.artistID + "/top?limit=5")
    if(response.ok) {
        const parsedBody = await response.json()
        console.log(parsedBody)
        setArtistSelected(parsedBody.data)   

    }
} catch (error) {
    console.log(error)
}
}

useEffect(() => {
    getArtistInfo()
}, [])

    return ( 
        <div className="container-fluid table-container">
        <div className="row table-row table-playlist">
          <div className="col-9 heading-and-table">
            <div className="table-headings d-flex">
              <h2>Popular</h2>
            </div>
           
              

             { artistSelected && <ArtistSelected artistSelected={artistSelected}/>} 

               
               



            <p className="see-more-text p-tags-different">See more</p>
          </div>
          <div className="artist-pick col-3">
            <div className="artist-pick-header">
              <h2>Artist pick</h2>
            </div>
            <div className="inner-container-artist-pick">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/39/Queen_The_Works.png"
                alt="Album cover"
                className="album-cover-picture mr-2"
              />
              <div className="posted-by-icon-and-text">
                <i className="bi bi-person-circle pr-1 text-white"></i>
                <span className="pr-3 text-white">Posted by Queen</span>
                <p className="mb-0 mt-2 p-tags-different">
                  <strong>Queen Best Of</strong>
                </p>
                <p className="mt-0 pt-0 p-tags-different">Playlist</p>
              </div>
            </div>
          </div>
        </div>
        {artistSelected && <Footer artistSelected={artistSelected}/>}
      </div>

    )
}

export default ArtistTable