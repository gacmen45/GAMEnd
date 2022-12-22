import styles from './Game.module.scss'
import { useGamePosts } from '../../hooks/useGamePosts'
import PostList from '../../components/post-list/PostList'
import Wrapper from '../../components/UI/wrapper/Wrapper'
import Post from '../../components/post/Post'

const Game = () => {
	const { loading, error, data } = useGamePosts()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const postAmount = data.game.data.attributes.posts.data.length
	const post = data.game.data.attributes.posts.data

	console.log(post.map(post => post.attributes.authors.data.map(author=>author.attributes.author)));

return <div>{post.map(post=>(
	<Post
	header={post.attributes.title}
	date={post.attributes.publishedAt}
	content={post.attributes.content}
	heroImg={post.attributes.image.data.attributes.url}
	author={post.attributes.authors.data.map(author=>author.attributes.author)}

	/>
))}</div>


	// return (
	// 	<Wrapper className={styles.container}>
	// 		<PostList query={useGamePosts} allPosts={allPosts} postAmount={postAmount} />
	// 	</Wrapper>
	// )
}

export default Game