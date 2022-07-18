import React, { memo } from 'react';

const SearchBar = React.memo(({ onClick, onKeyUp, handleRedirect }) => {
  return (
    <div style={{ margin: '1.5em' }}>
      <input
        style={{ width: '350px' }}
        onClick={handleRedirect}
        type='text'
        placeholder='search destination (e.g. London, West Hotel)'
        onKeyUp={onKeyUp}
      />
      <button onClick={onClick}>Search</button>
    </div>
  );
});

export default SearchBar;
