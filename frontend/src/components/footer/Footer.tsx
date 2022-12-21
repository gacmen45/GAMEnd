import styles from './Footer.module.scss'
import gacmen from '../../assets/logo.png'
import Header from '../header/Header'

const Footer = () => {
	return (
		<footer>
			<Header />

			<div className={styles['footer__author']}>
				<p className={styles['footer__author-text']}>
					design by{' '}
					<a href='https://github.com/gacmen45'>
						{/* <img src={gacmen} alt='' /> */}
						Marek Gacek
					</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer
