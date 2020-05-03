import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Startpage } from './Startpage.js';
import { Country } from './Country.js';
import { Genre } from './Genre.js';
import { Movie } from './Movie.js';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Startpage />
        </Route>
        <Route path='/Genre'>
          <Genre />
        </Route>
        <Route path='/Country'>
          <Country />
        </Route>
        <Route path='/Movie'>
          <Movie />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
