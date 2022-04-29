import React, { useEffect, useState } from "react"
import OneCard from "./OneCard"
import {Form} from "react-bootstrap"



let HomePage = () => {

    const [songs, setSongs] = useState([])
    const [searchQuery, setSearchQuery] = useState("britney spears")

let fetchData = async () => {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery)
        if(response.ok) {
            const parsedBody = await response.json();
            const data = parsedBody.data
            console.log(data)
            setSongs(data)
        }
    }


useEffect(() => {
    fetchData()
}, [])


useEffect(() => {
    console.log(searchQuery.length)
    if (searchQuery.length > 3) {
        fetchData()
    }
}, [searchQuery])



    return (
    
<div className="wrapper d-flex">
    <div className="sidebar">
  <img src="./img/Spotify_Logo_CMYK_White.png" height="38" alt="" />

  <div className="d-flex flex-column">
    <div className="mt-4">
      <i className="bi bi-house-fill mr-3"></i> <span>Home</span>
    </div>
    <div className="mt-2">
      <i className="bi bi-search mr-3"></i> <span>Search</span>
      <div className="searchPanel">
     
      <Form.Control
              style={{ width: '250px' }}
              type="text"
              placeholder="Search here"
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <Form.Text className="text-muted"></Form.Text>

      
    </div>
    
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
       
    
    <div className="container-fluid">
    <div>
        {/* nav bar of page  */}
        <div className="container-fluid pt-3">
            <div className="row">
                 <div className="col-6"> 
                <div className="arrows">    
                    <i className="arrow1 bi bi-chevron-left text-white"></i>
                    <i className="arrow2 bi bi-chevron-right text-white"></i>
                </div>
                
                    
                 </div> 
                <div className="navbar-col profile-picture-button">
                    <div className="">
                       <div className="profile-picture-dropdown d-flex">
                               <i className="bi bi-person-circle pr-3 text-white"></i>
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="profile-picture-top-bar" alt="" />
                         <span className="pr-3 text-white">Diego Ziba Ba..</span>
                         <i className="bi bi-caret-down-fill"></i>
                       </div>
                      </div>

                      </div>
                 </div>
  </div>
                    {/* <!-- end of drop-down button --> */}
        {/* <!-- end of navbar --> */}
        
 {/*        <!-- first section --> */}
        <div className="container-fluid first-section">
            <div className="row" id="rowspecial1">
                <div className="col">
                    <h2 className="text-white mt-5 mb-4">Good morning</h2>
                </div>
            </div>
            <div className="row rowspecial1">
                <div className="col">
                    <div className="card mb-3">
                        <div className="row no-gutters row-remove-margin row-remove-margin">
                            <div className="col-4">
                                <img className="first-section-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FOz8AAOSwnIleltAL%2Fs-l640.jpg&f=1&nofb=1" alt="..." />
                            </div>
                            <div className="col-6 flex-container">
                                <div className="card-body card-body-section1">
                                    <p className="card-text">Burning Jazz-rock</p>
                                </div>
                            </div>
                            <div className="col-2 flex-container">
                                <img className="green-play-img" src="http://hypebot.typepad.com/.a/6a00d83451b36c69e201bb09b0b161970d-200wi" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-3">
                        <div className="row no-gutters row-remove-margin">
                            <div className="col-4">
                            <img className="first-section-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fspotify-line-ui-kit%2F100%2Fsave-to-your-liked-songs-256.png&f=1&nofb=1" alt="..." />
                            </div>
                            <div className="col-6 flex-container">
                                <div className="card-body card-body-section1">
                                    <p className="card-text">Liked Songs </p>
                                </div>
                            </div>
                            <div className="col-2 flex-container">
                                <img className="green-play-img" src="http://hypebot.typepad.com/.a/6a00d83451b36c69e201bb09b0b161970d-200wi" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-3">
                        <div className="row no-gutters row-remove-margin">
                            <div className="col-4">
                            <img className="first-section-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67706c0000bebb72e10f5c8fa9f6a883f63178&f=1&nofb=1" alt="..." />
                            </div>
                            <div className="col-6 flex-container">
                                <div className="card-body card-body-section1">
                                    <p className="card-text">Metal Balads</p>
                                </div>
                            </div>
                            <div className="col-2 flex-container">
                                <img className="green-play-img" src="http://hypebot.typepad.com/.a/6a00d83451b36c69e201bb09b0b161970d-200wi" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-3">
                        <div className="row no-gutters row-remove-margin">
                            <div className="col-4">
                            <img className="first-section-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gnF_lqUxeTMWQsgv0VNxKAHaHa%26pid%3DApi&f=1" alt="..." />
                            </div>
                            <div className="col-6 flex-container">
                                <div className="card-body card-body-section1">
                                    <p className="card-text">Post Human Survival</p>
                                </div>
                            </div>
                            <div className="col-2 flex-container">
                                <img className="green-play-img" src="http://hypebot.typepad.com/.a/6a00d83451b36c69e201bb09b0b161970d-200wi" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-3">
                        <div className="row no-gutters row-remove-margin">
                            <div className="col-4">
                            <img className="first-section-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.syracuse.com%2Fresizer%2FQXGrmhR-2eGWMOvnjgisdy3w-vE%3D%2F1280x0%2Fsmart%2Fadvancelocal-adapter-image-uploads.s3.amazonaws.com%2Fimage.syracuse.com%2Fhome%2Fsyr-media%2Fwidth2048%2Fimg%2Fentertainment%2Fphoto%2F022809bonamassa11481jpg-d6723dbde1989cd9.jpg&f=1&nofb=1" alt="..." />
                            </div>
                            <div className="col-6 flex-container">
                                <div className="card-body card-body-section1">
                                    <p className="card-text">Joe Bonamassa</p>
                                </div>
                            </div>
                            <div className="col-2 flex-container">
                                <img className="green-play-img" src="http://hypebot.typepad.com/.a/6a00d83451b36c69e201bb09b0b161970d-200wi" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
        </div>

        {/* <!-- second section --> */}
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <h3 className="text-white mt-4 mb-4">Recently played</h3>
                </div>
                <div className="col-6 see-all-btn-col">
                    <button type="button" className="btn btn-primary see-all-btn">SEE ALL</button>
                </div>
            </div>
        </div>

        {/* <!-- cards --> */}
        <div className="container-fluid">
            <div className="row">
                {<OneCard songs={songs} />}
                
             
                
              
            </div>
        </div>

        {/* <!-- Third Section --> */}
        
{/*         <!-- cards --> */}
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <h3 className="text-white mt-4">Shows to try</h3>
                    <p className="text-white">Podcasts we think you'll get hooked on.</p>
                </div>
                <div className="col-6 see-all-btn-col">
                    <button type="button" className="btn btn-primary see-all-btn">SEE ALL</button>
                </div>
            </div>
            <div className="row">
                {/* <OneCard /> */}
              
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <h3 className="text-white mt-4">Discover something new</h3>
                    <p className="text-white">Get a fresh perspective</p>
                </div>
                <div className="col-6 see-all-btn-col">
                    <button type="button" className="btn btn-primary see-all-btn">SEE ALL</button>
                </div>
            </div>
            <div className="row">
               
               {/* <OneCard /> */}
           
            </div>
        </div>
     </div>
    </div>
    </div>
</div>

    )   
}

export default HomePage