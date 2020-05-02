import React, { useEffect, useState } from 'react';

export const Category = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState(['']);
  const [chosenCategory, setChosenCategory] = useState(['']);

  const choseCategory = (banana) => {
    fetch(`https://first-express-project.herokuapp.com/categories/${banana}`)
      .then((data) => data.json())

      .then((json) => {
        setChosenCategory(json);
        console.log('hello');
        console.log(json);
        //   setCountry('');
        console.log(chosenCategory);
      });
  };

  // useEffect(() => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setMovies(json);
  //     });
  // }, []);

  //  useEffect(() => {
  //   fetch(`https://first-express-project.herokuapp.com/categories/${country}`)
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
          choseCategory(category);
          event.preventDefault();
        }}
      >
        <label>
          <input
            required
            type='text'
            value={category}
            placeholder='Enter your Category'
            onChange={(event) => setCategory(event.target.value)}
          />
        </label>

        <button className='input-button' type='submit'>
          search
        </button>
      </form>
      {chosenCategory.map((item) => (
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
