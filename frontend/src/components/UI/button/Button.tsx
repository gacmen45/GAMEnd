import styles from './Button.module.scss'

interface Props {
	children: React.ReactNode,
	className:string
	onClick:any
}

const Button = (props:Props) => {
	const splitClass = `${styles.btn} ${props.className}`
	return <button className={splitClass} onClick={props.onClick}>{props.children}</button>
}

export default Button
