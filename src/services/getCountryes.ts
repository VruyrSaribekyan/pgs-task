import { gql } from '@apollo/client';

export const GET_COUNTRYES = gql`
query {
    countries {
      code
      name
      native
      phone
      capital
      currency
      languages {
        name
        native
        rtl
      }
      continent {
        name
      }
      emoji
      states {
        name
      }
    }
  }
`;