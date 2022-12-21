import { gql,useQuery } from '@apollo/client'
const CATEGORIES = gql`
query GetCategories{
categories{
  data{
    id
attributes{
  name
}
  }
}
}
`
export const useCategory =() => {
    const { loading, error, data } = useQuery(CATEGORIES)

    return{loading, error, data}
}