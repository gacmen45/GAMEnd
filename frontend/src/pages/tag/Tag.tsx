import styles from './Tag.module.scss'
import { useTagPosts } from '../../hooks/useTagPosts'
import PostList from '../../components/post-list/PostList'
import Wrapper from '../../components/UI/wrapper/Wrapper'

const Tag = () => {
	const { loading, error, data } = useTagPosts()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const postAmount = data.tag.data.attributes.posts.data.length
	const allPosts = data.tag.data.attributes.posts.data

	return (
		<Wrapper className={styles.container}>
			<PostList query={useTagPosts} allPosts={allPosts} postAmount={postAmount} />
		</Wrapper>
	)
}

export default Tag