import { useAllPosts } from "../../hooks/useAllPosts"
import PostCard from "../post-card/PostCard"

const RandomPost = () => {
    const { loading, error, data } = useAllPosts()

    if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

    // console.log('randomPost',data.posts.data[2]);

    const randomNumber =Math.floor( Math.random()*(data.posts.data.length))

   const randomPost = data.posts.data[randomNumber]

   console.log('randomPost' , randomPost);

return <div>
    <p>test</p>
    <PostCard
    key={randomPost.id}
    id={randomPost.id}
    title={randomPost.attributes.title}
    content={randomPost.attributes.content}
    publishedAt={randomPost.attributes.publishedAt}
    image={randomPost.attributes.image.data.attributes.url}
    categories={randomPost.attributes.categories.data.map((category:Post)=>category.attributes.name)}
    />
</div>
    

}

export default RandomPost