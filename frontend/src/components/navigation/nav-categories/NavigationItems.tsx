import classes from './NavigationItems.module.scss'

const categories = ['Frontend', 'Gry']

const NavigationItems = () => {
	return (
		<div className={classes.items}>
			<ul className={classes['items__list']}>
				{categories.map(category => (
					<li className={classes['items__item']}>{category}</li>
				))}
			</ul>
		</div>
	)
}

export default NavigationItems
