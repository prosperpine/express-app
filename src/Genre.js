import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Genre = () => {
  const [genre, setGenre] = useState(['']);
  const [chosenGenre, setChosenGenre] = useState(['']);

  const choseGenre = (banana) => {
    fetch(`https://first-express-project.herokuapp.com/genres/${banana}`)
      .then((data) => data.json())

      .then((json) => {
        setChosenGenre(json);
        console.log('hello');
        console.log(json);
        //   setCountry('');
        console.log(chosenGenre);
      });
  };
  return (
    <div>
      <div>
        <Link to={`/`}>
          <div className='icon-container'>
            <div className='icon'>
              <i className='fas fa-chevron-circle-left'></i>
            </div>
          </div>
        </Link>
      </div>
      <form
        onSubmit={(event) => {
          choseGenre(genre);
          event.preventDefault();
        }}
      >
        <label>
          <input
            required
            type='text'
            value={genre}
            placeholder='Enter your genre'
            onChange={(event) => setGenre(event.target.value)}
          />
        </label>

        <button className='input-button' type='submit'>
          search
        </button>
      </form>
      {chosenGenre.length === 0 ? (
        <div>
          <p>
            Sorry, we couldn't find your genre. Please check your spelling or
            try another one.
          </p>
        </div>
      ) : (
        chosenGenre.map((item) => (
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))
      )}
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
