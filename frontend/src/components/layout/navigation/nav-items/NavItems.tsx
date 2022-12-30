import { useCategory } from '../../../../hooks/useCategory'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faTag } from '@fortawesome/free-solid-svg-icons'

import styles from './NavItems.module.scss'

interface Props {
	matches: boolean
	onCloseHandler: any
	onShowGameList: any
	onHideGameModal: any
	onShowTagFilter: any
	onHideTagModal: any
}

interface Category {
	id: string
	attributes: any
}

const gamepadIcon = <FontAwesomeIcon icon={faGamepad} className={styles['items__item-icon']} />
const tagIcon = <FontAwesomeIcon icon={faTag} className={styles['items__item-icon']} />

const NavItems = (props: Props) => {
	const { loading, error, data } = useCategory()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const showGamesList = () => {
		props.onCloseHandler()
		props.onShowGameList()
	}
	const showTagFilter = () => {
		props.onCloseHandler()
		props.onShowTagFilter()
	}

	const closeHandler = () => {
		props.onCloseHandler()
		props.onHideGameModal()
		props.onHideTagModal()
	}

	return (
		<div className={styles.items}>
			<ul className={styles['items__list']}>
				{data.categories.data.map((category: Category) => (
					<Link to={`/category/${category.id}`} className={styles['items__link']} key={category.id}>
						<li key={category.id} className={styles['items__item']} onClick={closeHandler}>
							{category.attributes.name}
						</li>
					</Link>
				))}
				{!props.matches && (
					<div>
						<hr />
						<li onClick={showGamesList} className={styles['items__item']}>
							{gamepadIcon}Biblioteka Gier
						</li>
						<li onClick={showTagFilter} className={styles['items__item']}>
							{tagIcon}Lista tagów
						</li>
					</div>
				)}
			</ul>
		</div>
	)
}

export default NavItems
