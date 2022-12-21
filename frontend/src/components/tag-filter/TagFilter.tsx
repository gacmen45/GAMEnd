import styles from './TagFilter.module.scss'
import { useTags } from '../../hooks/useTags'
import Card from '../UI/wrapper/Card/Card'
import { Link } from 'react-router-dom'

const TagFilter = () => {
	const { loading, error, data } = useTags()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	return (
		<Card className={styles['tag__container']}>
			<h2 className={styles['tag__header']}>Sortuj według tagów:</h2>
			<ul className={styles['tag__list']}>
				{data.tags.data.map(tag => (
                    <Link to={`/tag/${tag.id}`}>
					<li className={styles['tag__item']}>
						<div className={styles['tag__item-box']}>
                            <div className={styles['tag__item-box-tag']}>
							<img
								className={styles['tag__item-img']}
								src={`http://localhost:1337${tag.attributes.image.data.attributes.url}`}
								alt=''
							/>
							<h3 className={styles['tag__item-title']}>{tag.attributes.title}</h3>
                            </div>
                            <div>
							<p className={styles['tag__item-items']}>{tag.attributes.posts.data.length}</p>
                            </div>
						</div>
					</li></Link>
				))}
			</ul>
		</Card>
	)
}

export default TagFilter
