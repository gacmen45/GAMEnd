import classes from './NavigationHeader.module.scss'
import logo from './../../../assets/logo.png'
import NavigationItems from '../nav-categories/NavigationItems'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'


const NavigationHeader = () => {
	const [matchesMD, setMatchesMD] = useState(window.matchMedia('(min-width: 768px)').matches)

	useEffect(() => {
		window.matchMedia('(min-width: 768px)').addEventListener('change', e => setMatchesMD(e.matches))
	}, [])

	return (
		<div className={classes.header}>
			<Link to={'/'} style={{ textDecoration: 'none' }}>
			<div className={classes['header__container']}>
			<img src={logo} alt='logo strony' className={classes['header__logo']} />
			<h1 className={classes['header__heading']}>GAMEnd</h1>
			</div>
		</Link>
			{matchesMD &&<NavigationItems/>}
		</div>
	)
}

export default NavigationHeader
