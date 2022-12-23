import styles from './NavItems.module.scss'
import { Link } from 'react-router-dom'
import { useCategory } from '../../../hooks/useCategory'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faTag } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

const gamepadIcon = <FontAwesomeIcon icon={faGamepad} className={styles['items__item-icon']} />
const tagIcon = <FontAwesomeIcon icon={faTag} className={styles['items__item-icon']} />

const NavItems = props => {
	const { loading, error, data } = useCategory()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	return (
		<div className={styles.items}>
			<ul className={styles['items__list']}>
				{data.categories.data.map(category => (
					<Link to={`/category/${category.id}`} className={styles['items__link']}>
						<li key={category.id} className={styles['items__item']}>
							{category.attributes.name}
						</li>
					</Link>
				))}
				{!props.matchesMD && (
					<div>
						<hr />
						<li className={styles['items__item']}>{gamepadIcon}Biblioteka Gier</li>
						<li className={styles['items__item']}>{tagIcon}Lista tagów</li>
					</div>
				)}
			</ul>
		</div>
	)
}

export default NavItems
