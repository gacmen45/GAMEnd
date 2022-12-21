import { useAllPosts } from '../../hooks/useAllPosts'
import PostCard from '../post-card/PostCard'
import styles from './RandomPost.module.scss'

const RandomPost = () => {
	const { loading, error, data } = useAllPosts()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const randomNumber = Math.floor(Math.random() * data.posts.data.length)
	const randomPost = data.posts.data[randomNumber]

	return (
		<div className={styles['random__container']}>
			<PostCard className={styles['random__post']}
				key={randomPost.id}
				id={randomPost.id}
				title={randomPost.attributes.title}
				content={randomPost.attributes.content}
				publishedAt={randomPost.attributes.publishedAt}
				image={randomPost.attributes.image.data.attributes.url}
				categories={randomPost.attributes.categories.data.map((category: Post) => category.attributes.name)}
			/>
		</div>
	)
}

export default RandomPost
