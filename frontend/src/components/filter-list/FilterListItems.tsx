import styles from './FilterListItems.module.scss'


const FilterListItems = (props) => {

	return <li className={styles['filter__item']}>
    					<div className={styles['filter__item-box']}>
    						<div className={styles['filter__item-box-tag']}>
    							<img
    								className={styles['filter__item-img']}
    							src={`http://localhost:1337${props.imgUrl}`}
    								alt=''
    							/>
    							<h3 className={styles['filter__item-title']}>{props.title}</h3>
    						</div>
    						<div>
    							<p className={styles['filter__item-items']}>{props.amount}</p>
    						</div>
    					</div>
    				</li>

	
}
export default FilterListItems
