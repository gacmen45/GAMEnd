import { useGames } from '../../hooks/useGames'
import FilterListItems from '../../components/filter-list/FilterList'
import Card from '../../components/UI/card/Card'
import styles from './GameList.module.scss'
import { Link } from 'react-router-dom'
import Modal from '../UI/modal/Modal'

const Test = () => {
	const { loading, error, data } = useGames()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const allItems = data.games.data
	const title = 'Bilbioteka Gier:'
	const direction = 'game'

	return (<Modal>
		<FilterListItems title={title} allItems={allItems} direction={direction} />
        </Modal>
	)
}
export default Test
