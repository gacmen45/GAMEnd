import { Link } from 'react-router-dom'

import logo from './../../../assets/logo.png'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<Link  className={styles['header__link']} to={'/'}>
			<div className={styles['header__container']}>
				<img src={logo} alt='logo strony' className={styles['header__logo']} />
				<h1 className={styles['header__heading']}>game-end</h1>
			</div>
		</Link>
	)
}

export default Header
