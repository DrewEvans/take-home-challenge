import React from 'react';

import { useQuery } from '@apollo/client';
import { LOAD_SALE } from '../GraphQL/queries';
import { useParams } from 'react-router-dom';

const SalesPage = ({}) => {
  const { id } = useParams();

  const { error, data, loading } = useQuery(LOAD_SALE, {
    variables: {
      id: id,
    },
  });

  console.log(data.sale);

  const {
    sale: {
      editorial: { title, hotelDetails },
      photos,
      location: {
        city: { name: city },
        country: { name: country },
      },
      offers,
    },
  } = data;

  if (loading) return <>...loading</>;
  if (error) return <>{error}</>;

  return (
    <div>
      <h1>{title}</h1>
      <h2>
        {city}, {country}
      </h2>
      <img src={photos[0].url} />
      <div
        className='content'
        dangerouslySetInnerHTML={{ __html: hotelDetails }}></div>
    </div>
  );
};

export default SalesPage;
