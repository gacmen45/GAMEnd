import NavItems from '../nav-items/NavItems'
import Social from '../../social/Social'

import styles from './NavSidebar.module.scss'

interface Props {
	mobileNav: boolean
}


const NavSidebar = (props: Props) => {
	return (
		<div className={`${styles.sidebar} ${props.mobileNav ? styles.active : ''}`}>
			<NavItems matches={false} onCloseHandler={props.onCloseHandler} onShowGameList={props.onShowGameList} onShowTagFilter={props.onShowTagFilter}onHideGameModal={props.onHideGameModal} onHideTagModal={props.onHideTagModal} />
			<Social className={''} />
		</div>
	)
}

export default NavSidebar
