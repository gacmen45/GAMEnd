import styles from './Home.module.scss'
import PostList from '../../components/post-list/PostList'
import Wrapper from '../../components/UI/wrapper/Wrapper'
import { useAllPosts } from '../../hooks/useAllPosts'
import RandomPost from '../../components/random-post/RandomPost'
import TagFilter from '../../components/filter-list/tag-filter/TagFilter'
import GameList from '../../components/filter-list/game-filter/GameList'

const Home = () => {
	const { loading, error, data } = useAllPosts()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const postAmount = data.posts.data.map(post => post.id).length //to props
	const allPosts = data.posts.data

	return (
		<Wrapper className={styles['home__container']}>
			<div className={styles['home__filters']}>
			<TagFilter />
			<GameList />
			</div>
			<div className={styles['home__main']}>
			<RandomPost />
			<PostList query={useAllPosts} allPosts={allPosts} postAmount={postAmount} />
			</div>
		</Wrapper>
	)
}

export default Home
