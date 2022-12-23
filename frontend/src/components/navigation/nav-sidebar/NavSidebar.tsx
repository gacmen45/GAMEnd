import styles from './NavSidebar.module.scss'
import Social from '../../social/Social'
import NavItems from '../nav-items/NavItems'

interface Props {
	mobileNav: boolean
}

const NavSidebar = (props: Props) => {
	return (
		<div className={`${styles.sidebar} ${props.mobileNav ? styles.active : ''}`}>
			<NavItems />
			<Social/>
		</div>
	)
}

export default NavSidebar
