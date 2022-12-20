import styles from './Home.module.scss'
import PostList from '../../components/post-list/PostList'



const Home = () => {
	
	return <div className={styles.test}>
        <h2>HOMEPAGE</h2>
		<PostList/>
    </div>
}

export default Home
