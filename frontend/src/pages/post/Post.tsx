import styles from './Post.module.scss'
import { useQuery, gql } from '@apollo/client'
import { Link, useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Wrapper from '../../components/UI/wrapper/Wrapper'
import remarkBreaks from 'remark-breaks'

const POST = gql`
	query GetPost($id: ID!) {
		post(id: $id) {
			data {
				id
				attributes {
					title
					content
					authors {
						data {
							attributes {
								author
							}
						}
					}
					categories {
						data {
							id
							attributes {
								name
							}
						}
					}
					publishedAt
					image {
						data {
							attributes {
								url
							}
						}
					}
				}
			}
		}
	}
`

const Post = () => {
	const { id } = useParams()
	const { loading, error, data } = useQuery(POST, {
		variables: { id: id },
	})

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const header = data.post.data.attributes.title
	const heroImg = `http://localhost:1337${data.post.data.attributes.image.data.attributes.url}`
	const date = new Date(data.post.data.attributes.publishedAt).toLocaleDateString('pl-PL')
	const content = data.post.data.attributes.content.replace(/\n/gi, '&nbsp; \n')
	const author = data.post.data.attributes.authors.data.map(author=>author.attributes.author)

	return (
		<Wrapper className={styles['post__container']}>
			<div className={styles['post__heroimg']}>
				<img src={heroImg} alt='' />
			</div>
			<h2 className={styles['post__header']}>{header}</h2>
			<div className={styles['post__text']}>
				<p className={styles['post__text-author']}>{author}</p>
				<p className={styles['post__text-date']}>{date}</p>
			</div>

			<div className={styles.test}>
				<ReactMarkdown remarkPlugins={[remarkBreaks]}>{content}</ReactMarkdown>
			</div>
		</Wrapper>
	)
}

export default Post
