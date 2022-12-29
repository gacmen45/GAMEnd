
import Modal from './../../../components/UI/modal/Modal'
import GameList from './GameList'

const GameListModal = (props) => {
	

	return (
    <Modal onHideModal={props.onHideModal}>
        <button onClick={props.onHideModal}>x</button>
		<GameList/>
        </Modal>
	)
}
export default GameListModal