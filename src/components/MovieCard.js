import React from 'react'
import '../componentCss/movieCard.css'
export default function MovieCard(props) {
  return (
  <div className='Card'>
      <img src={props.image.medium}/>
      <div className='Card-Body'>
         <p className='Card-Text'>"{props.name}</p>
      </div>
      <button id={props.id} className='button btn-primary' onClick={() => props.openMovie(props.id)}>Book </button>
  </div>
  // <img style={{width:'210px'}} div="card-img-top" src={props.image.medium} />
  // <div className='card-body'>
  //   <p className='card-text'>"{props.name}</p>
  //   <button className='btn btn-primary'>Go somewhere</button>
  // </div>
  )
}
