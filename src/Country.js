import React, { useEffect, useState } from 'react';

//const data = 'https://first-express-project.herokuapp.com/movies';

const API = 'https://first-express-project.herokuapp.com/movies';

export const Country = () => {
  const [movies, setMovies] = useState([]);
  const [country, setCountry] = useState(['']);
  const [chosen, setChosen] = useState(['']);

  const choseCountry = (banana) => {
    fetch(`https://first-express-project.herokuapp.com/countries/${banana}`)
      .then((data) => data.json())

      .then((json) => {
        setChosen(json);
        console.log('hello');
        console.log(json);
        //   setCountry('');
        console.log(chosen);
      });
  };

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json);
      });
  }, []);

  //  useEffect(() => {
  //   fetch(`https://first-express-project.herokuapp.com/movies/${country}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       setChosenCountry(json);
  //     });
  // }, [country]);

  return (
    <div>
      <form
        onSubmit={(event) => {
          choseCountry(country);
          event.preventDefault();
        }}
      >
        <label>
          <input
            required
            type='text'
            value={country}
            placeholder='Enter your country'
            onChange={(event) => setCountry(event.target.value)}
          />
        </label>

        <button className='input-button' type='submit'>
          search
        </button>
      </form>
      {chosen.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );

  //
  //   {movies.slice(0, 30).map((movie, index) => (
  //     <div className='movie' key={movie.id}>
  //       <div>
  //         <h1>{movie.title} </h1>
  //         <h4>Released {movie.release_date} </h4>
  //       </div>
  //     </div>
  //   ))}
  //   )
  // </div>
  // );
};

{
  /* //  <p>hello</p>
      //  {movies.map((movie) => movie.title)} 
      // {movies.slice(0, 30).map((movie, index) => (
      //   <div className='movie' key={movie.id}>
      //     <h1>{movie.title} </h1>
      //     <p>{movie.description} </p>
      //   </div>
      // ))}   */
}
