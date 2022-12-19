import styles from './Home.module.scss'
import { useQuery, gql } from '@apollo/client'

const REVIEWS = gql`
	query GetReviews {
		reviews {
			data {
				id
				attributes {
					title
					rating
					content
					publishedAt
				}
			}
		}
	}
`

const Home = () => {
	const { loading, error, data } = useQuery(REVIEWS)

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>


	return <div className={styles.test}>
        <h2>HOMEPAGE</h2>
        {data.reviews.data.map(review => (
            <div key={review.id}>
            <h3>{review.attributes.title}</h3>
            <p>{review.attributes.rating}</p>
            <p>{review.attributes.content}</p>
            <p>{review.attributes.publishedAt}</p>
            </div>
        ))}
    </div>
}

export default Home
