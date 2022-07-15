import { gql } from '@apollo/client';

export const LOAD_DEALS = gql`
  query {
    sales {
      editorial {
        title
      }
      id
      type
      location {
        city {
          name
        }
        country {
          name
        }
      }
      photos {
        url
        caption
      }
    }
  }
`;

export const LOAD_SALE = gql`
  query GetSale($id: String!) {
    sale(saleId: $id) {
      editorial {
        title
        hotelDetails
      }
      id
      type
      location {
        city {
          name
        }
        country {
          name
        }
      }
      offers {
        id
        title
        prices {
          leadRate {
            unitPerPerson
          }
        }
      }
      photos {
        url
        caption
      }
    }
  }
`;
