import styles from './Game.module.scss'
import { useGamePosts } from '../../hooks/useGamePosts'
import PostList from '../../components/post-list/PostList'
import Wrapper from '../../components/UI/wrapper/Wrapper'

const Game = () => {
	const { loading, error, data } = useGamePosts()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const postAmount = data.game.data.attributes.posts.data.length
	const allPosts = data.game.data.attributes.posts.data

	return (
		<Wrapper className={styles.container}>
			<PostList query={useGamePosts} allPosts={allPosts} postAmount={postAmount} />
		</Wrapper>
	)
}

export default Game