
import { useQuery, gql } from '@apollo/client'

const POSTS = gql`
	query GetPosts {
  posts{
    data{
      id
      attributes{
        title
        content
        publishedAt
		categories{
          data{
            attributes{
              name
            }
          }
        }
		image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`

export const useAllPosts = () => {


    const { loading, error, data } = useQuery(POSTS)

  



    return {error,data,loading}

}