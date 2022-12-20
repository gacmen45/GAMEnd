import styles from './PostList.module.scss'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'
import PostCard from '../post-card/PostCard'

const POSTS = gql`
	query GetPosts {
		posts {
			data {
				id
				attributes {
					title
                    description
					content
					publishedAt
				}
			}
		}
	}
`

interface Post{
    id:string;
    title:string;
    description:string;
    content:string;
    publishedAt:string;
    }


const PostList = () => {
    const { loading, error, data } = useQuery(POSTS)

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p> 

return (<div>
    {data.posts.data.map(post => (
        <PostCard
        key={post.id}
        id={post.id}
        title={post.attributes.title}
        description={post.attributes.description}
        content={post.attributes.content}
        publishedAt={post.attributes.publishedAt}
        />
        
    ))}
    </div>
)
}


export default PostList