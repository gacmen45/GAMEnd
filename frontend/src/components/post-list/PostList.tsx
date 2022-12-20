import styles from './PostList.module.scss'
import { useQuery, gql } from '@apollo/client'
import PostCard from '../post-card/PostCard'

const POSTS = gql`
	query GetPosts {
  posts{
    data{
      id
      attributes{
        title
        content
        publishedAt
		categories{
          data{
            attributes{
              name
            }
          }
        }
		image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`

interface Post {
	id: string
	attributes: any
	title: string
	content: string
	publishedAt: string
	image:string
	categories:string
	category:string
}

const PostList = () => {
	const { loading, error, data } = useQuery(POSTS)

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

    

	return (

		<div className={styles['list__box']}>
            <div className={styles['list__header']}>
            <h3>Wszystkie posty</h3>
            <p>(tutaj będzie liczba postów)</p>
            </div>
            <div className={styles['list__items']}>
			{data.posts.data.map((post: Post) => (
				<PostCard
					key={post.id}
					id={post.id}
					title={post.attributes.title}
					content={post.attributes.content}
					publishedAt={post.attributes.publishedAt}
					image={post.attributes.image.data.attributes.url}
					categories={post.attributes.categories.data.map((category:Post)=>category.attributes.name)}
					
				/>
			))}
            </div>
		</div>
	)
}

export default PostList
