import styles from './Home.module.scss'
import PostList from '../../components/post-list/PostList'
import Wrapper from '../../components/UI/wrapper/Wrapper'
import { useAllPosts } from '../../hooks/useAllPosts'



const Home = () => {
	
	return <Wrapper className={styles.container}>
		<PostList/>
    </Wrapper>
}

export default Home
