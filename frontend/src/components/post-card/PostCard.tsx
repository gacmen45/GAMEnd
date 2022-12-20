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
		<div key={props.id}>
            <p>test</p>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			<p>{props.content}</p>
			<p>{props.publishedAt}</p>
			<Link to={`/post/${props.id}`}>Więcej</Link>
		</div>
	)
}

export default PostCard
