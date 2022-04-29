import { useEffect, useState } from 'react';
import './App.css';
import Movies from './components/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieInfo from './components/MovieInfo';
import Navbar from './components/Navbar';
function App() {
  const [showList,setShowList]=useState(1);
  const getMovies=async ()=>{
    const res=await fetch('https://api.tvmaze.com/search/shows?q=all');
    const resJson=await res.json();
    setMovies(resJson)
  }
  useEffect(() => {
    getMovies();  
  }, [])
  function openMovie(id){
    for(var i=0;i<movies.length;i++)
    {
      if(movies[i].show.id===id){ 
        localStorage.setItem("Movie",JSON.stringify(movies[i]));
        setShowList(0)
        break;
       }
    }
  }
  
  const [movies,setMovies]=useState([]);
  return (
    <div className="App">
          <Navbar></Navbar>

           {
             showList===1?<Movies movies={movies} openMovie={openMovie}/>:<MovieInfo />
           }
           
    </div>
  );
} 

export default App;
