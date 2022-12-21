import { useQuery, gql } from '@apollo/client'

const GAMES = gql`
	query getGames {
		games {
			data {
				id
				attributes {
					title
					posts {
						data {
							id
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
`

export const useGames = () => {
	const { loading, error, data } = useQuery(GAMES)
	return { error, data, loading }
}
