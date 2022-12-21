import styles from './Category.module.scss'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { useCategoryPosts } from '../../hooks/useCategoryPosts'
import PostList from '../../components/post-list/PostList'
import Wrapper from '../../components/UI/wrapper/Wrapper'
import { useAllPosts } from '../../hooks/useAllPosts'
import CategoryPostList from '../../components/category-post-list/CategoryPostList'


const Category = () => {
	
	// const { loading, error, data } = useCategoryPosts()

	// if (loading) return <p>loading...</p>
	// if (error) return <p>error...</p>
	// console.log(data)

	// const categoryName = data.category.data.attributes.name
	// const allPosts = data.category.data.attributes.posts.data

	return (
		// <div className={styles.test}>
		// 	<h2>{categoryName}</h2>
		// 	{allPosts.map(post => (
		// 		<div>
		// 			<h3>{post.attributes.title}</h3>
		// 			<p>{post.attributes.content}</p>
		// 		</div>
		// 	))}
		// </div>
    <Wrapper className={styles.container}>
		<CategoryPostList/>
    </Wrapper>
	)
}

export default Category
