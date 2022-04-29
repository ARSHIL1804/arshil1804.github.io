import React from 'react'
import MovieCard from './MovieCard'
import '../componentCss/movie.css'

export default function Movies(props) {
  return (
      <> 
      <div className="Title">
            Movie List
      </div>
      <div className='movie'>
          {
              props.movies.map((item,index) => (
                 <MovieCard name={item.show.name} image={item.show.image} id={item.show.id} openMovie={props.openMovie}/>
              ))
          }
      </div>
      </>
  )
}