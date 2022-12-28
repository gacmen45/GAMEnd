import { useState, useEffect } from 'react'

import NavItems from '../nav-items/NavItems'
import Header from '../../header/Header'

import styles from './NavBar.module.scss'

const NavBar = () => {
	const [matches, setMatches] = useState(window.matchMedia('(min-width: 768px)').matches)

	useEffect(() => {
		window.matchMedia('(min-width: 768px)').addEventListener('change', e => setMatches(e.matches))
	}, [])

	return (
		<div className={styles.navbar}>
			<Header />
			{matches && <NavItems matches={matches} />}
		</div>
	)
}

export default NavBar
