import './App.module.scss'

import Home from './pages/home/Home'
import Navigation from './components/layout/navigation/Navigation'
import Category from './pages/category/Category'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Post from './pages/post/Post'
import Footer from './components/layout/footer/Footer'
import Tag from './pages/tag/Tag'
import Game from './pages/game/Game'
import Test from './components/test/Test'
import { useState } from 'react'
import ModalCard from './components/modal-card/ModalCard'
import GameList from './components/filter-list/game-filter/GameList'
import TagFilter from './components/filter-list/tag-filter/TagFilter'
import GameListModal from './components/filter-list/game-filter/GameListModal'
import TagFilterModal from './components/filter-list/tag-filter/TagFilterModal'

const client = new ApolloClient({
	uri: 'http://localhost:1337/graphql',
	cache: new InMemoryCache(),
})

function App() {
	const [gameListModal, setGameListModal] = useState(false)
	const [tagFilterModal, setTagFilterModal] = useState(false)

	const showGameListHandler = () => {
		setGameListModal(true)
	}
	const hideGameListHandler = () => {
		setGameListModal(false)
	}
	const showTagFilterHandler = () => {
		setTagFilterModal(true)
	}
	const hideTagFilterModal =() => {
		setTagFilterModal(false)
	}
	

	return (
		<BrowserRouter>
			<ApolloProvider client={client}>
				<div>
					<Navigation onShowGameList={showGameListHandler} onShowTagFilter={showTagFilterHandler} />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/category/:id' element={<Category />} />
						<Route path='/tag/:id' element={<Tag />} />
						<Route path='/game/:id' element={<Game />} />
						<Route path='/post/:id' element={<Post />} />
					</Routes>
					{gameListModal && <GameListModal onHideModal={hideGameListHandler} />}
					{tagFilterModal && <TagFilterModal onHideModal={hideTagFilterModal} />}
				</div>
			</ApolloProvider>
			<Footer />
		</BrowserRouter>
	)
}

export default App
