import styles from './Card.module.scss'

interface Props {
	children: React.ReactNode,
	className:string
}

const Card = (props:Props) => {
    const splitClass = `${styles.card} ${props.className}`
    return <div className={splitClass}>{props.children}</div>
}


export default Card