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
    <main>
      <section className='welcome genre'>
        <div>
          <Link to={`/`}>
            <div className='icon-container'>
              <div className='icon'>
                <i className='fas fa-chevron-circle-left'></i>
              </div>
            </div>
          </Link>
        </div>
        <div className='inputContainer'>
          <form
            onSubmit={(event) => {
              choseGenre(genre);
              event.preventDefault();
            }}
          >
            <div>
              <label className='input-button' type='submit'>
                <input
                  className='inputForm'
                  required
                  type='text'
                  value={genre}
                  placeholder='Enter your genre'
                  onChange={(event) => setGenre(event.target.value)}
                />
              </label>
            </div>
          </form>
        </div>
      </section>
      <div className='movieList'>
        {chosenGenre.length === 0 ? (
          <div className='notFoundText'>
            <h4>
              Sorry, we couldn't find your genre. Please check your spelling or
              try another one.
            </h4>
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
    </main>
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
