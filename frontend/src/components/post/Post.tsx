import styles from './Post.module.scss'

import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Wrapper from '../../components/UI/wrapper/Wrapper'
import remarkBreaks from 'remark-breaks'
import { usePost } from '../../hooks/usePost'



const Post = (props) => {
	

	// const {loading,error,data}= props.query()

	// if (loading) return <p>loading...</p>
	// if (error) return <p>error...</p>

const header = props.header
const heroImg = `http://localhost:1337${props.heroImg}`
const author = props.author
const date = new Date(props.date).toLocaleDateString('pl-PL')
const content = (props.content).replace(/\n/gi, '&nbsp; \n')



	// const header = data.post.data.attributes.title
	// const heroImg = `http://localhost:1337${data.post.data.attributes.image.data.attributes.url}`
	// const date = new Date(data.post.data.attributes.publishedAt).toLocaleDateString('pl-PL')
	// const content = data.post.data.attributes.content.replace(/\n/gi, '&nbsp; \n')
	// const author = data.post.data.attributes.authors.data.map(author=>author.attributes.author)



	// const category = data.post.data.attributes.categories.data.map(category => category.attributes.name)
	// const categoryId = data.post.data.attributes.categories.data.map(category => category.id)

	
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
