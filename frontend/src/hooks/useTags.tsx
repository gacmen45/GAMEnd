import { useQuery, gql } from '@apollo/client'

const TAGS = gql`
	query getTags {
		tags {
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

export const useTags = () => {
	const { loading, error, data } = useQuery(TAGS)

	console.log(data);
	return { error, data, loading }
}
