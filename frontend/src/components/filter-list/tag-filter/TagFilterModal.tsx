import Modal from './../../../components/UI/modal/Modal'
import TagFilter from './TagFilter'


const TagFilterModal = (props) => {
	

	return (
    <Modal onHideModal={props.onHideModal}>
        <button onClick={props.onHideModal}>x</button>
		<TagFilter/>
        </Modal>
	)
}
export default TagFilterModal