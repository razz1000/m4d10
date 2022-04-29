import React from "react";
import {useNavigate} from "react-router-dom"


let OneCard = ({songs}) => {
    
const navigate = useNavigate()


    return (
           songs.map((song) => (
                <div className="col">
                <div className="card second-section-card"
               >
                    <img src={song.album.cover} className="card-img-top img-second-section" alt="..." 
                     onClick={() => (
                        console.log("this is the movie" + song.album.id),
                        navigate('/albumpage/' + song.album.id)
                    )}/>
                    <div className="card-body card-body-section2">
                        <h3
                        onClick={() => (
                            console.log("this is the artist: " + song.artist.name),
                            navigate("/artistpage/" + song.artist.id)
                        )}
                        >{song.artist.name}</h3>
                        <h5 className="card-title">{song.title}</h5>
                        <p className="card-text">{song.title_short}</p>
                    </div>
                </div>
            </div>  
            ))           
    )
}

export default OneCard