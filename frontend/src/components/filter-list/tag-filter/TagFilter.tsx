import styles from './TagFilter.module.scss'
import { useTags } from '../../../hooks/useTags'
import Card from '../../UI/wrapper/Card/Card'
import { Link } from 'react-router-dom'
import FilterListItems from '../FilterList'

const TagFilter = () => {
	const { loading, error, data } = useTags()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const allItems = data.tags.data
	const title = 'Sortuj według tagów:'
	const direction = 'tag'

	return (
		<FilterListItems title={title} allItems={allItems} direction={direction} />
		// <Card className={styles['tag-list__container']}>
		// 	<h2 className={styles['tag-list__header']}>Sortuj według tagów:</h2>
		// 	<ul className={styles['tag-list__list']}>
		// 		{allItems.map(tag => (
		// 			<Link to={`/tag/${tag.id}`} className={styles['tag-list__link']}>
		// 				<FilterListItems
		// 					imgUrl={tag.attributes.image.data.attributes.url}
		// 					title={tag.attributes.title}
		// 					amount={tag.attributes.posts.data.length}
		// 				/>
		// 			</Link>
		// 		))}
		// 	</ul>
		// </Card>
	)
}

export default TagFilter
