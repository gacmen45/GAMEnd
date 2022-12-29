import Modal from './../../components/UI/modal/Modal'
// import TagFilter from './TagFilter'
import styles from './ModalCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Button from '../UI/button/Button'

const close = <FontAwesomeIcon icon={faX} className={styles['btn-icon']} />

const ModalCard = props => {
	return (
		<Modal onHideModal={props.onHideModal}>
			<div className={styles.box}>
				<Button className={styles.btn} onClick={props.onHideModal}>
					{close}
				</Button>
			</div>

			{props.content}
		</Modal>
	)
}
export default ModalCard