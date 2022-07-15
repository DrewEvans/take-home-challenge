import React, { useEffect } from 'react';
import SaleCard from './SaleCard';

import { useQuery } from '@apollo/client';
import { LOAD_DEALS } from '../GraphQL/queries';

function GetSales() {
  const { error, data, loading } = useQuery(LOAD_DEALS);

  if (loading) return <>...loading</>;
  if (error) return <>{error}</>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.sales.map((sale) => {
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
  );
}

export default GetSales;
