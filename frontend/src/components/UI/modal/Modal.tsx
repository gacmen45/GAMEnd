import { Fragment, } from 'react'

import  ReactDOM  from 'react-dom'

import styles from './Modal.module.scss'

interface Backdrop{
	onHideModal:any;
}

interface Modal{
	children:React.ReactNode
}

const Backdrop = (props:Backdrop) => {
	return <div className={styles.backdrop} onClick={props.onHideModal}/>
}

const ModalOverlay = (props:Modal) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	)
}

const portalElement = document.getElementById('overlays')
const Modal = props => {

   return <Fragment>
    {ReactDOM.createPortal(<Backdrop onHideModal={props.onHideModal}/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
   </Fragment>
}

export default Modal