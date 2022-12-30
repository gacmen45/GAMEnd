import { useTags } from '../../../hooks/useTags'

import FilterListItems from '../FilterList'

interface Props{
	onHideModal:any
}

const TagFilter = (props:Props) => {
	const { loading, error, data } = useTags()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const allItems = data.tags.data
	const title = 'Lista Tagów:'
	const direction = 'tag'

	return (
		<FilterListItems title={title} allItems={allItems} direction={direction} onHideModal={props.onHideModal} />
	)
}

export default TagFilter
