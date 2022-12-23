import {Link} from 'react-router-dom'
import styles from'./Header.module.scss'
import logo from './../../assets/logo.png'



const Header = () => {
    return (
    <Link to={'/'} style={{ textDecoration: 'none' }}>
    <div className={styles['header__container']}>
    <img src={logo} alt='logo strony' className={styles['header__logo']} />
    <h1 className={styles['header__heading']}>game-end</h1>
    </div>
</Link>)
}


export default Header