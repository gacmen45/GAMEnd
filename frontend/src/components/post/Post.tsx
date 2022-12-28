import styles from './Post.module.scss'

import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Wrapper from '../../components/UI/wrapper/Wrapper'
import remarkBreaks from 'remark-breaks'

interface Props{
	header:string,
	author:string,
	date:string,
	content:string,
}

const Post = (props:Props) => {
const header = props.header
const heroImg = `http://localhost:1337${props.heroImg}`
const author = props.author
const date = new Date(props.date).toLocaleDateString('pl-PL')
const content = (props.content).replace(/\n/gi, '&nbsp; \n')

	return (
		<Wrapper className={styles['post__container']}>
			<div className={styles['post__heroimg']}>
				<img src={heroImg} alt='' />
			</div>
			<h2 className={styles['post__header']}>{header}</h2>
			<div className={styles['post__text']}>
				<p className={styles['post__text-author']}>{author} </p>
				<p className={styles['post__text-date']}>{date}</p>
			</div>

			<div className={styles.test}>
				<ReactMarkdown remarkPlugins={[remarkBreaks]}>{content}</ReactMarkdown>
			</div>
		</Wrapper>
	)
}

export default Post
