import React from "react";

let ArtistSelected = ({artistSelected}) => {
    return(
         (artistSelected != [] ? 
            artistSelected.map((artist) => (
                <table className="table table-borderless">
                <tbody>
                <tr>
              <th scope="row">{artist.title}</th>
              <td>
                <img
                  src={artist.album.cover_small}
                  alt={artist.album.title}
                  className="table-cover-picture mr-2"
                />
                <span>{artist.album.title}</span>
              </td>
              <td>{artist.rank}</td>
              <td>{artist.duration}</td>
              <td>
                <div
                  className="popup"
    
                >
                  <i className="bi bi-heart heart-table">
                    <i className="bi bi-suit-heart-fill heart-filled"></i>
                    <span className="popuptext myPopup">
                      Added to your Liked Songs
                    </span>
                  </i>
                </div>
              </td>
            </tr>
            </tbody>
            
        </table>
        ))  
: <div></div>)
        

    
        )
}

export default ArtistSelected