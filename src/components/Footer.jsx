import React from "react";



let Footer = (props) => {
    return(
    (props.artistSelected[0] !== [] ? 
    <footer>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-4 d-flex align-items-center">
            <div className="row">
              <div className="col-2">
                <img src={props.artistSelected[0].album.cover} alt="" />
              </div>
              <div className="col-8">
                <div className="row d-flex flex-column">
                  <div className="col-12">
                    <p className="pl-4 p-song-name">
                      {props.artistSelected[0].album.title}
                    </p>
                  </div>
                  <div className="row d-flex flex-column">
                    <div className="col-12">
                      <p className="p-artist-name">{props.artistSelected[0].artist.name}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 d-flex align-items-center">
                <i className="bi bi-heart pr-4"></i>
                <i className="bi bi-image"></i>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div
                className="col d-flex justify-content-center mt-1 align-items-center"
              >
                <i className="bi bi-shuffle"></i>
                <i className="bi bi-skip-backward ml-3"></i>
                <i className="bi bi-play-circle mx-3"></i>
                <i className="bi bi-skip-forward mr-3"></i>
                <i className="bi bi-arrow-repeat"></i>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex align-items-center pb-2">
                <span>0.12</span>
                <progress
                  className="main-progress m-3"
                  id="progress"
                  value="0"
                  min="0"
                >
                  <span id="progress-bar"></span>
                </progress>
                <span>3.34</span>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <i className="bi bi-list pr-4"></i>
            <i className="bi bi-tv pr-4"></i>
            <i className="bi bi-volume-up pr-4"></i>
            <progress className="volume-progress" id="progress" value="0" min="0">
              <span id="progress-bar"></span>
            </progress>
          </div>
        </div>
      </div>
    </footer> : 
    <div></div>)

    )
}

export default Footer