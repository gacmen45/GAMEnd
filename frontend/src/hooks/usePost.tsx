import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'

const POST = gql`
	query GetPost($id: ID!) {
		post(id: $id) {
			data {
				id
				attributes {
					title
					content
					authors {
						data {
							attributes {
								author
							}
						}
					}
					categories {
						data {
							id
							attributes {
								name
							}
						}
					}
					publishedAt
					image {
						data {
							attributes {
								url
							}
						}
					}
				}
			}
		}
	}
`

export const usePost = () =>{
    const { id } = useParams()
	const { loading, error, data } = useQuery(POST, {
		variables: { id: id },
	})




    return {error,data,loading}
}