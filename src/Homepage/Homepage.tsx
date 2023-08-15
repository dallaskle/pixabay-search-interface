import React from 'react';
import SearchBar from './SearchBar'
import Images from './Images';

const Homepage: React.FC = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Pixabay Image Searcher</h1>
      <SearchBar />
      <Images />
    </div>
  );
};

export default Homepage;