import styles from './Footer.module.scss'
import gacmen from '../../assets/logo.png'
const Footer = () => {
    return <footer>
         <div className={styles["footer__author"]}>
            <p className={styles["footer__author-text"]}>design by <a href="https://github.com/gacmen45">
                <img
                        src={gacmen} alt=""/>gacmen45</a></p>
        </div>
    </footer>
}


export default Footer