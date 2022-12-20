import classes from './NavigationItems.module.scss'

import { gql,useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

const CATEGORIES = gql`
query GetCategories{
categories{
  data{
    id
attributes{
  name
}
  }
}
}
`

// const categories = ['Frontend', 'Gry']

const NavigationItems = () => {
	const { loading, error, data } = useQuery(CATEGORIES)

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>



	return (
		<div className={classes.items}>
			<ul className={classes['items__list']}>
				{/* {categories.map(category => (
					<li className={classes['items__item']}>{category}</li>
				))} */}
				{data.categories.data.map(category=> (
					<Link to={`/category/${category.id}`}><li key={category.id} className={classes['items__item']}>{category.attributes.name}</li></Link>
				))}
			</ul>
		</div>
	)
}

export default NavigationItems
