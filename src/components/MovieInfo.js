import React, { useEffect, useState } from 'react'
import '../componentCss/movieInfo.css'
import Form from './Form'
export default function MovieInfo() {
  const [movie,setMovie]=useState("")
  useEffect(() => {
    setMovie(JSON.parse(localStorage.getItem("Movie")))
    }, [])
  const [showForm,setshowForm]=useState(0);
  return showForm===0?
    <div className='MovieInfo'>
            <div className='movie-image'>
               <img src={movie!=""?movie.show.image.medium:""}></img>
            </div>
            <div className='movie-info'>
                  <div className='movie-name'>{movie!=""?movie.show.name:""}</div> 
                  <div className='genre'>
                      {

                          movie!="" ?
                          <div> 
                                {
                                    movie.show.genres.map((item)=>{
                                      return <span className="genre-item">{item}</span>
                                    })
                                }  
                          </div>
                          :""
                      }   
                  </div>
                  <div className='movie-summary'><span>Summary : </span><val>{movie!=""?movie.show.summary:""}</val></div>
                  <button className="buy" onClick={()=>setshowForm(1)}>
                     Book Ticket
                  </button>
            </div>

    </div>:<Form></Form>
  
}
