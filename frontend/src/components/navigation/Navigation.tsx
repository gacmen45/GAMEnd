import NavigationHeader from './nav-header/NavigationHeader'
import MobileNavigation from './nav-mobile/MobileNavigation'
import { Spin as Hamburger } from 'hamburger-react'


import classes from './Navigation.module.scss'
import { useState,useEffect } from 'react'

const Navigation = () => {
	const [isOpen, setOpen] = useState(false)
	const [matchesMD, setMatchesMD] = useState(window.matchMedia('(min-width: 768px)').matches)

	useEffect(() => {
		window.matchMedia('(min-width: 768px)').addEventListener('change', e => setMatchesMD(e.matches))
	}, [])

	return (
		<nav className={classes.nav}>
			<div className={classes['nav__container']}>
				<NavigationHeader/>

				{!matchesMD &&<Hamburger toggled={isOpen} toggle={setOpen} />}
				{!matchesMD && <MobileNavigation mobileNav={isOpen} />}
			</div>
		</nav>
	)
}

export default Navigation
