import styles from './Post.module.scss'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const POST = gql`
	query GetPost($id:ID!) {
		post (id:$id){
			data {
				id
				attributes {
					title
					content
				}
			}
		}
	}
`

const Post = () => {
	const { id } = useParams()
	const { loading, error, data } = useQuery(POST, {
		variables: { id: id },
	})

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>
    console.log(data)

	return <div className={styles.test}>
    <h2>{data.post.data.attributes.title}</h2>
    <p>{data.post.data.attributes.rating}</p>
    <p>{data.post.data.attributes.description}</p>
    <ReactMarkdown>{data.post.data.attributes.content}</ReactMarkdown>
    </div>
}

export default Post
