import styles from './Category.module.scss'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'

const CATEGORY = gql`
query GetCategory($id:ID!){
  category(id:$id){
    data{
      id
      attributes{
        name
        posts {
          data {
            id
            attributes {
              title
              description
              content
            }
          }
        }
      }
    }
  }
}


`
const Category = () => {
    const { id } = useParams()
	const { loading, error, data } = useQuery(CATEGORY, {
		variables: { id: id },
	})

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>
    console.log(data)

const categoryName = data.category.data.attributes.name
const allPosts = data.category.data.attributes.posts.data

	return <div className={styles.test}>
        <h2>{categoryName}</h2>
        {allPosts.map(post=>(
          <div>
          <h3>{post.attributes.title}</h3>
          <p>{post.attributes.description}</p>
          <p>{post.attributes.content}</p>
          </div>
        ))}
    </div>
}

export default Category
