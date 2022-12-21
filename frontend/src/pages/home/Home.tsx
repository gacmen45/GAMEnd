import styles from './Home.module.scss'
import PostList from '../../components/post-list/PostList'
import Wrapper from '../../components/UI/wrapper/Wrapper'
import { useAllPosts } from '../../hooks/useAllPosts'



const Home = () => {
	const { loading, error, data } = useAllPosts()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

console.log(data)
const postAmount = (data.posts.data.map(post=>post.id)).length //to props
const allPosts = data.posts.data
console.log('home',postAmount)
console.log('home',allPosts)

	
	return <Wrapper className={styles.container}>
		<PostList query={useAllPosts} allPosts={allPosts} postAmount={postAmount}/>
    </Wrapper>
}

export default Home
