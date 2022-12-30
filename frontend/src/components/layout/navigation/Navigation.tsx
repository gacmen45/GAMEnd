import { useState, useEffect } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

import NavBar from './nav-bar/NavBar'
import NavSidebar from './nav-sidebar/NavSidebar'
import Social from '../social/Social'
import Wrapper from '../../UI/wrapper/Wrapper'

import styles from './Navigation.module.scss'

interface Props{
	onShowGameList:any
	onShowTagFilter:any
	onHideGameModal:any
	onHideTagModal:any
}

const Navigation = (props:Props) => {
	const [isOpen, setOpen] = useState(false)
	const [matches, setMatchesMD] = useState(window.matchMedia('(min-width: 992px)').matches)

	useEffect(() => {
		window.matchMedia('(min-width: 992px)').addEventListener('change', e => setMatchesMD(e.matches))
	}, [])

	const closeNavHandler=()=>{
		setOpen(false)
	}
	
	return (
		<nav className={styles.nav}>
			<Wrapper className={styles['nav__container']}>
				<NavBar />
				{matches && <Social className={styles['nav__social']} />}
				{!matches && <Hamburger toggled={isOpen} toggle={setOpen} />}
				{!matches && <NavSidebar mobileNav={isOpen} onCloseHandler={closeNavHandler} onShowGameList={props.onShowGameList} onShowTagFilter={props.onShowTagFilter} onHideGameModal={props.onHideGameModal} onHideTagModal={props.onHideTagModal}/> }
			</Wrapper>
		</nav>
	)
}

export default Navigation
