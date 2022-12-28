import Header from '../header/Header'
import Social from '../social/Social'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer>
			<div className={styles['footer__container']}>
				<Header />
				<Social className={''} />
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
