import styles from './Footer.module.scss'
import gacmen from '../../assets/logo.png'
import Header from '../../header/Header'
import Social from '../../social/Social'

const Footer = () => {
	return (
		<footer>
			<div className={styles['footer__container']}>
				<Header />
				<Social />
				<div className={styles['footer__author']}>
					<p className={styles['footer__author-text']}>
						© 2023 design by <a href='https://github.com/gacmen45'>Marek Gacek</a>
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
