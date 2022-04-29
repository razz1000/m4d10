import React, { useEffect } from "react"
import ArtistTable from "./ArtistTable"
import { useParams, useNavigate } from 'react-router-dom'
import Footer from "./Footer"
import { useState } from "react"

let ArtistPage = () => {

    const params = useParams()
    let [artist, setArtist] = useState([])


useEffect(() => {
    setArtist()
}, [])

    return (

<div className="wrapper d-flex">
{/*       <!-- Sidebar --> */}

      <div className="sidebar">
        <div className="top-sidebar">
          <img src="./img/Spotify_Logo_CMYK_White.png" height="38" alt="" />

          <div className="d-flex flex-column">
            <div className="mt-4">
              <i className="bi bi-house-fill mr-3"></i> <span>Home</span>
            </div>
            <div className="mt-2">
              <i className="bi bi-search mr-3"></i> <span>Search</span>
            </div>
            <div className="mt-2">
              <i className="bi bi-collection-fill mr-3"></i> <span>Library</span>
            </div>
            <div className="mt-5 create">
              <i className="bi bi-plus-lg mr-3"></i> <span>Create Playlist</span>
            </div>
            <div className="mt-3 heart">
              <i className="bi bi-heart-fill mr-3"></i> <span>Liked Songs</span>
            </div>
          </div>
          <hr />

 <div className="list-with-scroll-bar"> 

          <div className="p-lists">
            <p>Funky Heavy Blussy</p>
            <p>Your top songs 2020</p>
            <p>In love with you- Erylah B...</p>
            <p>This is Rod Stewart</p>
            <p>FRANCHISE Ft Young Thug...</p>
            <p>Your top songs 2019</p>
            <p>Jazz classNameics</p>
            <p>Your Top Songs 2018</p>
            <p>New Playlist</p>
            <p>Metal Ballads</p>
            <p>This is Opeth</p>
            <p>Funky Heavy Blussy</p>
            <p>Your top songs 2020</p>
            <p>In love with you- Erylah B...</p>
            <p>This is Rod Stewart</p>
            <p>FRANCHISE Ft Young Thug...</p>
            <p>Your top songs 2019</p>
            <p>Jazz classNameics</p>
            <p>Your Top Songs 2018</p>
            <p>New Playlist</p>
            <p>Metal Ballads</p>
            <p>This is Opeth</p>
            <div className="d-flex justify-content-between">
              <p>Jack 30th Birthday</p>
              <i className="bi bi-people"></i>
            </div>
            <div className="d-flex justify-content-between">
              <p>Jack 30th Birthday Party 2</p>
              <i className="bi bi-people"></i>
            </div>

            <p>Jun19</p>
            <p>This is Joe Banana</p>
            <p><i className="bi bi-arrow-down-circle-fill"></i> Install App</p>
          </div>
           </div>
        </div>
      </div>

{/*       <!-- This container contains everything except the Sidebar and the Footer --> */}
      <div className="all-except-sidebar">
{/*         <!-- Jumbotron and Nav container start --> */}
        <div className="container-fluid">
 {/*          <!-- Jumbotron --> */}
          <div className="container-fluid container-top-with-nav">
            <div className="row">
              <div className="jumbotron col-12">
                <div className="inner-container-jumbotron">
                  <p className="p-tags-different">
                    <i className="bi bi-patch-check-fill"></i>
                    Verified Artist
                  </p>
                  <h1 className="display-4">Queen</h1>
                  <p className="lead monthly-listeners-text p-tags-different">
                    37,120,733 monthly listeners
                  </p>
                </div>
              </div>
            </div>
{/*             <!-- The Nav bar --> */}

            <div className="arrows">
              <i className="arrow1 bi bi-chevron-left"></i>
              <i className="arrow2 bi bi-chevron-right"></i>
            </div>
            <div className="navbar-col profile-picture-button">
              <div className="">
                <div className="profile-picture-dropdown d-flex">
                  <i className="bi bi-person-circle pr-3 text-white"></i>
                    
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt=""
                    className="profile-picture-top-bar"
                  />
                  <span className="pr-3 text-white">Diego Ziba Ba..</span>
                  <i className="bi bi-caret-down-fill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

{/*         <!-- The play/start and the table in one div --> */}
        <div className="play-stop-and-table-container">
{/*           <!--     The "Navigation" section with the Play/Stop button  --> */}
          <div className="container-fluid container-play-stop-button">
            <ul className="nav">
              <div className="play-follow-buttons">
                <i
                  className="bi bi-play-circle-fill big-play-button"
                  id="play-pause-button-id"

                ></i>
                <p className="follow-text ml-3 p-tags-different">FOLLOW</p>
                <i className="bi bi-three-dots ml-3"></i>
              </div>
            </ul>
          </div>
{/*           <!--     END: The "Navigation" section with the Play/Stop button  --> */}

{/*           <!-- Table section --> */}


</div>
        <ArtistTable />
{/*         <!-- END : Table section --> */}
      </div>


    </div>
    )
}

export default ArtistPage