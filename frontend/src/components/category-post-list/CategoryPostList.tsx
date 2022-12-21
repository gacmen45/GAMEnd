import { useState } from "react"
import { useCategoryPosts } from "../../hooks/useCategoryPosts"
import styles from './../post-list/PostList.module.scss'
import PostCard from "../post-card/PostCard"

const CategoryPostList = () => {
	const [view,setView] = useState(false)

const handleView = () => {
	setView(current=>!current)
}

	const { loading, error, data } = useCategoryPosts()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

console.log(data)
const postAmount = data.category.data.attributes.posts.data.length

console.log(data.category.data.attributes.posts.data.map(post => post.attributes.title))
return (

    <div className={styles['list__box']}>
        <div className={styles['list__header']}>
        <h3>Wszystkie posty</h3>
        <p>{postAmount}</p>
        <button onClick={handleView}>change</button>
        </div>
        <div className={styles['list__items']}>
        {data.category.data.attributes.posts.data.map(post =>(
            <PostCard
            key={post.id}
            id={post.id}
            title={post.attributes.title}
            content={post.attributes.content}
            publishedAt={post.attributes.publishedAt}
            image={post.attributes.image.data.attributes.url}
            categories={post.attributes.categories.data.map((category:Post)=>category.attributes.name)}
            handleView={view}
            
        />
        ))}
        </div>
    </div>
)



}

export default CategoryPostList