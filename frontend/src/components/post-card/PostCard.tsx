import styles from './PostCard.module.scss'
import { Link } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface Props{
    id:string;
    title:string;
    content:string;
    publishedAt:string;
	image:string
	categories:string
    }


const PostCard = (props:Props) => {
	const image = `http://localhost:1337${props.image}`
	const date = new Date(props.publishedAt).toLocaleDateString('pl-PL')
const description = `${props.content.substring(0,200)}...`
	
const splitClass = `${styles['card__box']} ${props.className}`
	return (
		<div key={props.id} className={`${splitClass} ${props.handleView?styles.test:''}`}>
			<Link to={`/post/${props.id}`} className={styles['card__link']}>
				<div className={styles['card__img']}>
			<img  src={image} alt="" />
			</div>
			<h3 className={styles['card__title']}>{props.title}</h3>
			<ReactMarkdown className={styles['card__content']}>{description}</ReactMarkdown>
			<p className={styles['card__publishedAt']}>{date}</p>
			<p className={styles['card__category']}>{props.categories}</p>
		</Link>
		</div>
	)
}

export default PostCard
