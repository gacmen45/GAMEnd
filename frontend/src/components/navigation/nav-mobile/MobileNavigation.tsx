import classes from './MobileNavigation.module.scss'

import NavigationItems from '../nav-categories/NavigationItems'

interface Props {
	mobileNav: boolean
}

const MobileNavigation = (props: Props) => {
	return <div className={`${classes.sidebar} ${props.mobileNav ? classes.active : ''}`}>
<NavigationItems/>
	</div>
}

export default MobileNavigation
