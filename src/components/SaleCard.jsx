import React from 'react';
import { NavLink } from 'react-router-dom';

const SaleCard = ({ id, country, city, photo, title }) => {
  return (
    <NavLink
      to={`/sale/${id}`}
      style={{ color: '#000', textDecoration: 'none' }}>
      <div key={id} id={id} className='sales-card'>
        <img
          style={{ height: '200px', width: '100%' }}
          src={photo.url}
          alt={photo.description}
        />
        <h2>{title}</h2>
        <h3>
          {city},{country}
        </h3>
      </div>
    </NavLink>
  );
};

export default SaleCard;
