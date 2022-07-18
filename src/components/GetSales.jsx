import React, { useEffect, useState } from 'react';
import SaleCard from './SaleCard';

import { useQuery } from '@apollo/client';
import { LOAD_DEALS } from '../GraphQL/queries';
import { searchEmployee } from '../helpers/searchFunction';

function GetSales() {
  const [newDeals, setNewDeals] = useState();
  const [searchTerm, setSearchTerm] = useState();

  const { error, data, loading } = useQuery(LOAD_DEALS);

  const handleOnKeyUp = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    setNewDeals(searchEmployee(data.sales, searchTerm));
  };

  if (loading) return <>...loading</>;
  if (error) return <>{error.message}</>;

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
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
    </>
  );
}

export default GetSales;
