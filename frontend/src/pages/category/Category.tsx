import styles from './Category.module.scss'
import { useCategoryPosts } from '../../hooks/useCategoryPosts'
import PostList from '../../components/post-list/PostList'
import Wrapper from '../../components/UI/wrapper/Wrapper'

const Category = () => {
	const { loading, error, data } = useCategoryPosts()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const postAmount = data.category.data.attributes.posts.data.length
	const allPosts = data.category.data.attributes.posts.data

	return (
		<Wrapper className={styles.container}>
			<PostList query={useCategoryPosts} allPosts={allPosts} postAmount={postAmount} />
		</Wrapper>
	)
}

export default Category
