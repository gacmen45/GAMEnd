import styles from './NavBar.module.scss'
import NavItems from '../nav-items/NavItems'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../header/Header'
import Social from '../../social/Social'

const NavBar = () => {
	const [matchesMD, setMatchesMD] = useState(window.matchMedia('(min-width: 768px)').matches)

	useEffect(() => {
		window.matchMedia('(min-width: 768px)').addEventListener('change', e => setMatchesMD(e.matches))
	}, [])

	return (
		<div className={styles.header}>
			<Link to={'/'} style={{ textDecoration: 'none' }}>
				<Header />
			</Link>

			{matchesMD && <NavItems matchesMD={matchesMD} />}
		</div>
	)
}

export default NavBar
