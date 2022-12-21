import styles from './NavigationItems.module.scss'
import { Link } from 'react-router-dom'
import { useCategory } from '../../../hooks/useCategory'



const NavigationItems = () => {
	const { loading, error, data } = useCategory()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>



	return (
		<div className={styles.items}>
			<ul className={styles['items__list']}>
				
				{data.categories.data.map(category=> (
					<Link to={`/category/${category.id}`} className={styles['items__link']}><li key={category.id} className={styles['items__item']}>{category.attributes.name}</li></Link>
				))}
			</ul>
		</div>
	)
}

export default NavigationItems
