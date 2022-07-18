import React from 'react';

import { useQuery } from '@apollo/client';
import { LOAD_SALE } from '../GraphQL/queries';
import { useParams } from 'react-router-dom';

const SalesPage = () => {
  const { id } = useParams();

  const { error, data, loading } = useQuery(LOAD_SALE, {
    variables: { id: id },
  });

  if (loading) return <>...loading</>;
  if (error) return <>{error}</>;

  if (data) {
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
    return (
      <>
        <div>
          <img src={photos[0].url} alt={photos.description} />
          <h1>{title}</h1>
          <h2>
            {city}, {country}
          </h2>
          {offers.map((offer) => {
            const {
              title,
              prices: {
                leadRate: { unitPerPerson },
              },
            } = offer;
            return (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3>Offer:</h3>
                <p
                  style={{
                    marginLeft: '1em',
                    alignItems: 'center',
                  }}>
                  {title}{' '}
                  <span style={{ marginLeft: '1em', color: 'orange' }}>
                    £{unitPerPerson} pp
                  </span>
                </p>
              </div>
            );
          })}
          <hr />
          <div
            className='content'
            dangerouslySetInnerHTML={{ __html: hotelDetails }}></div>
        </div>
      </>
    );
  }
};

export default SalesPage;
