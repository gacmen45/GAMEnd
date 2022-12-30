import { Link } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import Card from '../UI/card/Card'

import styles from './PostCard.module.scss'
import Button from '../UI/button/Button'

interface Props {
	id: string
	title: string
	content: string
	publishedAt: string
	image: string
	categories: string
	categoriesId:string
	className: string
	handleView: Boolean
}

const PostCard = (props: Props) => {
	const image = `http://localhost:1337${props.image}`
	const date = new Date(props.publishedAt).toLocaleDateString('pl-PL')
	const description = `${props.content.substring(0, 100)}...`

	const splitClass = `${styles['card__box']} ${props.className}`
	return (
		<Card key={props.id} className={`${splitClass} ${props.handleView ? styles.list : ''}`}>
			<Link to={`/post/${props.id}`} className={styles['card__link']}>
				<div className={styles['card__img']} style={{backgroundImage:`url(${image})`}}>
					{/* <img src={image} alt='' /> */}
				</div>
				<div className={styles['card__text']}>
				<h3 className={styles['card__text-title']}>{props.title}</h3>
				<hr />
				<ReactMarkdown className={styles['card__text-content']}>{description}</ReactMarkdown>
				<div className={styles['card__text-bottom']}>
				<p className={styles['card__text-bottom-publishedAt']}>{date}</p>
				<div className={styles['card__text-bottom-category']}>{props.categories}</div>
				</div>
				</div>
			</Link>
		</Card>
	)
}

export default PostCard
