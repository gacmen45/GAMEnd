import styles from './PostList.module.scss'
import { useQuery, gql } from '@apollo/client'
import PostCard from '../post-card/PostCard'

const POSTS = gql`
	query GetPosts {
  posts{
    data{
      id
      attributes{
        title
        content
        publishedAt
      }
    }
  }
}
`

interface Post {
	id: string
	attributes: any
	title: string
	description: string
	content: string
	publishedAt: string
}

const PostList = () => {
	const { loading, error, data } = useQuery(POSTS)

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

    console.log(data);

	return (
		<div className={styles['list__box']}>
            <div className={styles['list__header']}>
            <h3>Wszystkie posty</h3>
            <p>(tutaj będzie liczba postów)</p>
            </div>
            <div className={styles['list__items']}>
			{data.posts.data.map((post: Post) => (
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
		</div>
	)
}

export default PostList
