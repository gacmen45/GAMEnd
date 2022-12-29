import styles from './HeroImg.module.scss'
import Card from '../../UI/card/Card'
import Header from '../header/Header'

const HeroImg = () => {
	return (
		<Card className={styles.heroImg}>
			<div className={styles.background}>
            <Header/>
            <h2>Trochę granka, trochę programowanka</h2>
            </div>
		</Card>
	)
}

export default HeroImg
