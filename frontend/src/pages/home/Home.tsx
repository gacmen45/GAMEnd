import styles from './Home.module.scss'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'

const POSTS = gql`
	query GetPosts {
		posts {
			data {
				id
				attributes {
					title
					rating
                    description
					content
					publishedAt
				}
			}
		}
	}
`


const Home = () => {
	const { loading, error, data } = useQuery(POSTS)

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>


	return <div className={styles.test}>
        <h2>HOMEPAGE</h2>
        {data.posts.data.map(post => (
            <div key={post.id}>
            <h3>{post.attributes.title}</h3>
            <p>{post.attributes.rating}</p>
            <p>{post.attributes.description}</p>
            <p>{post.attributes.content}</p>
            <p>{post.attributes.publishedAt}</p>
            <Link to={`/post/${post.id}`}>Więcej</Link>
            </div>
        ))}
    </div>
}

export default Home
