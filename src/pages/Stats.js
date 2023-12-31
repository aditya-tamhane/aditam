import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Aditya Tamhane "
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
    </article>
  </Main>
);

export default Stats;
