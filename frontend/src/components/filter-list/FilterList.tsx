import styles from './FilterList.module.scss'
import Card from '../UI/wrapper/Card/Card'
import { Link } from 'react-router-dom'

const FilterList = props => {
	return (
		<Card className={styles['filter__container']}>
			<h2 className={styles['filter__header']}>{props.title}</h2>
			<ul className={styles['filter__list']}>
				{props.allItems.map(item => (
					<Link to={`/game/${item.id}`} className={styles['filter__link']}>
						<li className={styles['filter__item']}>
							<div className={styles['filter__item-box']}>
								<div className={styles['filter__item-box-tag']}>
									<img
										className={styles['filter__item-img']}
										src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
										alt=''
									/>
									<h3 className={styles['filter__item-title']}>{item.attributes.title}</h3>
								</div>
								<div>
									<p className={styles['filter__item-items']}>{item.attributes.posts.data.length}</p>
								</div>
							</div>
						</li>
					</Link>
				))}
			</ul>
		</Card>
	)
}
export default FilterList
