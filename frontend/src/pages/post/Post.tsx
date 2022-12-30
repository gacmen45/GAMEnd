import { usePost } from '../../hooks/usePost'

import Post from '../../components/post/Post'

const PostPage = () => {
	const { loading, error, data } = usePost()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const post = data.post.data

	return (
		<Post
			header={post.attributes.title}
			date={post.attributes.publishedAt}
			content={post.attributes.content}
			heroImg={post.attributes.image.data.attributes.url}
			author={post.attributes.authors.data.map(author => author.attributes.author)}
		/>
	)
}

export default PostPage
