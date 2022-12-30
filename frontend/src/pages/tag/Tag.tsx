import { useTagPosts } from '../../hooks/useTagPosts'

import Wrapper from '../../components/UI/wrapper/Wrapper'
import HeroImg from '../../components/layout/hero-img/HeroImg'
import PostList from '../../components/post-list/PostList'

import styles from './Tag.module.scss'
const Tag = () => {
	const { loading, error, data } = useTagPosts()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const postAmount = data.tag.data.attributes.posts.data.length
	const allPosts = data.tag.data.attributes.posts.data

	return (
		<Wrapper className={styles.container} >
			<HeroImg/>
			<PostList query={useTagPosts} allPosts={allPosts} postAmount={postAmount} matches={true}/>
		</Wrapper>
	)
}

export default Tag