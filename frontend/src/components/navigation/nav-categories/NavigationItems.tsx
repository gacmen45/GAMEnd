import classes from './NavigationItems.module.scss'

import { gql,useQuery } from '@apollo/client'

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

	console.log(data)


	return (
		<div className={classes.items}>
			<ul className={classes['items__list']}>
				{/* {categories.map(category => (
					<li className={classes['items__item']}>{category}</li>
				))} */}
				{data.categories.data.map(category=> (
					<li key={category.id} className={classes['items__item']}>{category.attributes.name}</li>
				))}
			</ul>
		</div>
	)
}

export default NavigationItems
