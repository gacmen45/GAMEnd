import NavBar from './nav-bar/NavBar'
import NavSidebar from './nav-sidebar/NavSidebar'
import { Spin as Hamburger } from 'hamburger-react'
import Social from '../social/Social'

import styles from './Navigation.module.scss'
import { useState, useEffect } from 'react'

const Navigation = () => {
	const [isOpen, setOpen] = useState(false)
	const [matchesMD, setMatchesMD] = useState(window.matchMedia('(min-width: 768px)').matches)

	useEffect(() => {
		window.matchMedia('(min-width: 768px)').addEventListener('change', e => setMatchesMD(e.matches))
	}, [])

	return (
		<nav className={styles.nav}>
			<div className={styles['nav__container']}>
				<NavBar />
				{matchesMD &&<Social className={styles['nav__social']} />}
				{!matchesMD && <Hamburger toggled={isOpen} toggle={setOpen} />}
				{!matchesMD && <NavSidebar mobileNav={isOpen} />}
			</div>
		</nav>
	)
}

export default Navigation
