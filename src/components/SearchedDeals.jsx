import React from 'react';
import SaleCard from './SaleCard';

const SearchedDeals = ({ sales }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
        {sales.map((sale) => {
          const {
            id,
            editorial: { title },
            photos,
            location: {
              city: { name: city },
              country: { name: country },
            },
          } = sale;
          return (
            <SaleCard
              key={id}
              id={id}
              country={country}
              title={title}
              city={city}
              photo={photos[0]}
            />
          );
        })}
      </div>
    </>
  );
};

export default SearchedDeals;
