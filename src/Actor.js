import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Actor = () => {
  const [actor, setActor] = useState(['']);
  const [chosenActor, setChosenActor] = useState(['']);

  const choseActor = (actor) => {
    fetch(`https://first-express-project.herokuapp.com/actors/${actor}`)
      .then((data) => data.json())
      .then((json) => {
        setChosenActor(json);
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
          <h4>Enter your favourite actor/actress.</h4>
          <form
            onSubmit={(event) => {
              choseActor(actor);
              event.preventDefault();
            }}
          >
            <label className='input-button' type='submit'>
              <input
                className='inputForm'
                required
                type='text'
                value={actor}
                placeholder='ie Meryl Streep'
                onChange={(event) => setActor(event.target.value)}
              />
            </label>
          </form>
        </div>
      </section>
      <div className='movieList'>
        {chosenActor.length === 0 ? (
          <div className='notFoundText'>
            <h4>
              Sorry, we couldn't find your actor/actress. Please check your
              spelling or try another one.
            </h4>
          </div>
        ) : (
          chosenActor.map((item) => (
            <div>
              <h3>{item.title}</h3>
              <h2>{item.release_year}</h2>
              <h2>{item.director}</h2>
              <h2>{item.duration}</h2>
              <p>{item.description}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
};
