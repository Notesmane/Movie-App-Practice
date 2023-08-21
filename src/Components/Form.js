import {useState, useEffect } from 'react';
import MovieDisplay from './MovieDisplay';

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function  Form(props) {
  // State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: '',
  });

  // handleChange - updates formData when we type into form
  const handleChange = (event) => {
    // use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value});
  };

const handleSubmit = (event) => {
  //prevent page from refreshing on form submission
  event.preventDefault();
  //pass the search term to moviesearch prop, which is apps getMovie function
  props.moviesearch(formData.searchterm);
  setFormData({searchterm:''}); // returns an empty string which will resut the input box
}



    //The component must return some JSX
    return (
        <div className="mb-12">
          <form onSubmit={handleSubmit}>
            <div className='submitDiv'>
              <input 
                type="text"
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm} 
                placeholder='Enter Movie'
              />
            </div>
            <div className='submitDiv'>
              <input type="submit" value="submit" className="submitButton"/>
            </div>
          </form>
        </div>
    )

  };