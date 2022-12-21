import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'

const TAG = gql`
	query GetTag($id: ID!) {
		tag(id: $id) {
			data {
				id
				attributes {
					title
					posts {
						data {
							id
							attributes {
								title
								content
								publishedAt
								categories {
									data {
										attributes {
											name
										}
									}
								}
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
			}
		}
	}
`
export const useTagPosts = () => {
	const { id } = useParams()
	const { loading, error, data } = useQuery(TAG, {
		variables: { id: id },
	})

	return { error, data, loading }
}
