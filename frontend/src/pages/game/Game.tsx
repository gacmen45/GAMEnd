import { useGamePosts } from '../../hooks/useGamePosts'

import Post from '../../components/post/Post'
interface Props{
attributes:any
}


const Game = () => {
	const { loading, error, data } = useGamePosts()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const post = data.game.data.attributes.posts.data


	return (
		<div>
			{post.map((post:Props )=> (
				<Post
					header={post.attributes.title}
					date={post.attributes.publishedAt}
					content={post.attributes.content}
					heroImg={post.attributes.image.data.attributes.url}
					author={post.attributes.authors.data.map((author:Props) => author.attributes.author)}
				/>
			))}
		</div>
	)
}

export default Game
