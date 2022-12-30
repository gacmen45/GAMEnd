import { Link } from 'react-router-dom'

import Card from '../UI/card/Card'

import styles from './FilterList.module.scss'

interface Props {
	title: string
	direction: string
	allItems:any
	onHideModal:any
}

interface Item {
	id: string
	attributes: any
}

const FilterList = (props:Props) => {


	return (
		<Card className={styles['filter__container']}>
			<h2 className={styles['filter__header']}>{props.title}</h2>
			<ul className={styles['filter__list']}>
				{props.allItems.map((item: Item) => (
					<Link to={`/${props.direction}/${item.id}`} className={styles['filter__link']}>
						<li onClick={props.onHideModal} className={styles['filter__item']}>
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
								{item.attributes.posts.data.length>1 &&<p className={styles['filter__item-items']}>{item.attributes.posts.data.length}</p>}
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
