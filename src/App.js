
import {useState, useEffect} from "react";
import "./App.css";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./Components/MovieDisplay";
import InfoDisplay from './Components/InfoDisplay';
import Form from "./Components/Form";
console.log(process.env.REACT_APP_MOVIE_API_KEY); //use this for when you want to access the API KEY

export default function App() {
  // variable with your apiKey
  const apiKey = '98e3fb1f';

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      // set the Movie state to the movie
      setMovie(data);
      console.log(data);
      // console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

    // This will run on the first render but not on subsequent renders
    useEffect(() => {
      getMovie("Casino");
    }, []); // with the empty array it will prevent a constant loop
    // USE OUR COMPONENTS IN APPs RETURNED JSX
    // We pass the getMovie function as a prop called moviesearch
    return (
      // <div className='bg-blue-500 flex-col justify-center items-center'>
      <div className='mainApp'>
        <div classNAme='mainContainer'></div>
        {/* <div className='mainLeftContatiner'> */}
          <MovieDisplay movie={movie} />
{/*           
        </div> */}
        <div className='mainRightContainer'>
          <Form moviesearch={getMovie} />
          <InfoDisplay movie={movie} />

        </div>
      </div>

    );
  };

