import styles from './Wrapper.module.scss'

interface Props {
	children: React.ReactNode,
	className:string
}

const Wrapper = (props:Props) =>{
const splitClass = `${styles.wrapper} ${props.className}`

return <div className={splitClass}>{props.children}</div>
}

export default Wrapper