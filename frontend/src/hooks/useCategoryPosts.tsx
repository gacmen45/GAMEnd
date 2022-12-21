import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'

const CATEGORY = gql`
query GetCategory($id:ID!){
  category(id:$id){
    data{
      id
      attributes{
        name
        posts {
          data {
            id
            attributes {
              title
              content
            }
          }
        }
      }
    }
  }
}


`

export const useCategoryPosts = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(CATEGORY, {
		variables: { id: id },
	})

return {error,data,loading}
}