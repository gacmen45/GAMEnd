import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'

const GAME = gql`
	query GetTag($id: ID!) {
		game(id: $id) {
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
								authors {
									data {
										attributes {
											author
										}
									}
								}
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
export const useGamePosts = () => {
	const { id } = useParams()
	const { loading, error, data } = useQuery(GAME, {
		variables: { id: id },
	})

	return { error, data, loading }
}
