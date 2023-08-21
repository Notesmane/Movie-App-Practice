// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function  InfoDisplay({ movie }) {
    //The component must return some JSX

    const loaded = () => {
      
      return (
        <div className='infoContainer'>
        <div className='movieTitle'>
          <p>Title: {movie.Title}</p>

        </div>
        <div className='movieGenre'>
          <p>Genre: {movie.Genre}</p>

        </div>
        <div className='movieYear'>
          <p>Released: {movie.Year}</p>      

        </div>
          {/* <img src={movie.Poster} alt={movie.Title} /> */}
        </div>
      );
    };

    
    const loading = () => {
      return <h1>No Movie to Display</h1>;
    };
    
    //Ternary operator will determine which functions JSX we will return
    return movie ? loaded() : loading();
  };
  
  // We must export the component to use it in other files
  // export default MovieDisplay;