import React from "react"
import AlbumTable from "./AlbumTable"

let AlbumPage = () => {
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
          <form>
              <label for="search">
            <input type="search" id="search" name="search" value="search" />
            <button className="search" onclick="searchFunction(event)">Search</button>
        </label>
        </form>
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
          
            </div>
            <AlbumTable />


        </div>
    </div>
        
    )
}

export default AlbumPage
