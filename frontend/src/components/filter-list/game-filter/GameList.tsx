import { useGames } from '../../../hooks/useGames'

import FilterListItems from '../FilterList'

interface Props {
	onHideModal: any
}

const GameList = (props: Props) => {
	const { loading, error, data } = useGames()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const allItems = data.games.data
	const title = 'Bilbioteka Gier:'
	const direction = 'game'

	return <FilterListItems title={title} allItems={allItems} direction={direction} onHideModal={props.onHideModal} />
}
export default GameList
