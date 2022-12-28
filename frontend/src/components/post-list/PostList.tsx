import styles from './PostList.module.scss'
import PostCard from '../post-card/PostCard'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCells } from '@fortawesome/free-solid-svg-icons'

interface Post {
	id: string
	attributes: any
	title: string
	content: string
	publishedAt: string
	image:string
	categories:string
	category:string
	handleView:any
}

interface Props{
	query:any,
	allPosts:any,
	postAmount:number,
}

const PostList = (props:Props) => {
	const grid = <FontAwesomeIcon icon={faTableCells}  className={styles['list__btn-icon']}/>

	const [view,setView] = useState(false)

const handleView = () => {
	setView(current=>!current)
}

	const { loading, error, data } = props.query() //to props

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	return (

		<div className={styles['list__box']}>
            <div className={styles['list__header']}>
				<div className={styles['list__header-post']}>
				<h3>Wszystkie posty</h3>
				<p>{props.postAmount}</p>
				</div>
			<button className={styles['list__btn']} onClick={handleView}>{grid}</button>
            </div>
            <div className={styles['list__items']}>
			{props.allPosts.map((post: Post) => ( //to
				<PostCard
					key={post.id}
					id={post.id}
					title={post.attributes.title}
					content={post.attributes.content}
					publishedAt={post.attributes.publishedAt}
					image={post.attributes.image.data.attributes.url}
					categories={post.attributes.categories.data.map((category:Post)=>category.attributes.name)}
					handleView={view}
					className={''}
					
				/>
			))}
            </div>
		</div>
	)
}

export default PostList
