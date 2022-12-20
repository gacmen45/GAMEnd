import styles from './PostCard.module.scss'
import { Link } from 'react-router-dom'

interface Props{
    id:string;
    title:string;
    description:string;
    content:string;
    publishedAt:string;
    }

const PostCard = (props:Props) => {
	return (
		<div key={props.id} className={styles['card__box']}>
			<img className={styles['card__img']} src="https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/cola-0247.jpg" alt="" />
			<h3 className={styles['card__title']}>{props.title}</h3>
			<p className={styles['card__content']}>{props.content.substring(0,200)}</p>
			<p className={styles['card__publishedAt']}>{props.publishedAt}</p>
			<Link to={`/post/${props.id}`}><button>Czytaj dalej</button></Link>
		</div>
	)
}

export default PostCard
