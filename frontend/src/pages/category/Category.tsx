import { useCategoryPosts } from '../../hooks/useCategoryPosts'

import Wrapper from '../../components/UI/wrapper/Wrapper'
import HeroImg from '../../components/layout/hero-img/HeroImg'
import PostList from '../../components/post-list/PostList'

import styles from './Category.module.scss'

const Category = () => {
	const { loading, error, data } = useCategoryPosts()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const postAmount = data.category.data.attributes.posts.data.length
	const allPosts = data.category.data.attributes.posts.data

	return (
		<Wrapper className={styles.container}>
			<HeroImg/>
			<PostList query={useCategoryPosts} allPosts={allPosts} postAmount={postAmount} matches={true}/>
		</Wrapper>
	)
}

export default Category
