import { useState,useEffect } from 'react'
import { useAllPosts } from '../../hooks/useAllPosts'

import Wrapper from '../../components/UI/wrapper/Wrapper'
import HeroImg from '../../components/layout/hero-img/HeroImg'
import TagFilter from '../../components/filter-list/tag-filter/TagFilter'
import GameList from '../../components/filter-list/game-filter/GameList'
import PostList from '../../components/post-list/PostList'

import styles from './Home.module.scss'

interface Post {
	id:string
}

const Home = () => {
	const [matches, setMatchesMD] = useState(window.matchMedia('(min-width: 992px)').matches)

	useEffect(() => {
		window.matchMedia('(min-width: 992px)').addEventListener('change', e => setMatchesMD(e.matches))
	}, [])

	const { loading, error, data } = useAllPosts()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const postAmount = data.posts.data.map((post:Post) => post.id).length
	const allPosts = data.posts.data

	return (
		<Wrapper className={styles['home__container']}>
			<div className={styles['home__filters']}>
			{matches &&<TagFilter onHideModal={true} />}
			{matches &&<GameList onHideModal={true}/>}
			</div>
			<div className={styles['home__main']}>
			<HeroImg/>
			<PostList query={useAllPosts} allPosts={allPosts} postAmount={postAmount} matches={matches} />
			</div>
		</Wrapper>
	)
}

export default Home
