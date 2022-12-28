import styles from './TagFilter.module.scss'
import { useTags } from '../../../hooks/useTags'
import Card from '../../UI/card/Card'
import { Link } from 'react-router-dom'
import FilterListItems from '../FilterList'

const TagFilter = () => {
	const { loading, error, data } = useTags()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const allItems = data.tags.data
	const title = 'Lista Tagów:'
	const direction = 'tag'

	return (
		<FilterListItems title={title} allItems={allItems} direction={direction} />
	)
}

export default TagFilter
