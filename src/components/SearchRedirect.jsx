import React from 'react';
import { NavLink } from 'react-router-dom';

export const SearchRedirect = () => {
  return (
    <NavLink to='/search'>
      <div className='hero-section' style={{ margin: '2em auto' }}>
        Where do want to go?
      </div>
    </NavLink>
  );
};
