import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

import Modal from './../../components/UI/modal/Modal'
import Button from '../UI/button/Button'

import styles from './ModalCard.module.scss'
import { Component } from 'react'

const close = <FontAwesomeIcon icon={faX} className={styles['btn-icon']} />

interface Props{
	onHideModal:any
	content:Component
}

const ModalCard = (props:Props) => {
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