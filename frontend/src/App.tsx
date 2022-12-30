import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { useState } from 'react'

import Navigation from './components/layout/navigation/Navigation'
import Home from './pages/home/Home'
import Category from './pages/category/Category'
import Game from './pages/game/Game'
import Tag from './pages/tag/Tag'
import Post from './pages/post/Post'
import ModalCard from './components/modal-card/ModalCard'
import TagFilter from './components/filter-list/tag-filter/TagFilter'
import GameList from './components/filter-list/game-filter/GameList'
import Footer from './components/layout/footer/Footer'

import './App.module.scss'


const client = new ApolloClient({
	uri: 'http://localhost:1337/graphql',
	cache: new InMemoryCache(),
})

function App() {
	const [gameListModal, setGameListModal] = useState(false)
	const [tagFilterModal, setTagFilterModal] = useState(false)

	const showGameListHandler = () => {
		setTagFilterModal(false)
		setGameListModal(true)
	}
	const hideGameListHandler = () => {
		setGameListModal(false)
	}
	const showTagFilterHandler = () => {
		setGameListModal(false)
		setTagFilterModal(true)
	}
	const hideTagFilterModal =() => {
		setTagFilterModal(false)
	}
	

	return (
		<BrowserRouter>
			<ApolloProvider client={client}>
				<div>
					<Navigation onShowGameList={showGameListHandler} onShowTagFilter={showTagFilterHandler} onHideGameModal={hideGameListHandler} onHideTagModal={hideTagFilterModal}/>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/category/:id' element={<Category />} />
						<Route path='/tag/:id' element={<Tag />} />
						<Route path='/game/:id' element={<Game />} />
						<Route path='/post/:id' element={<Post />} />
					</Routes>
{gameListModal && <ModalCard content={<GameList onHideModal={hideGameListHandler}/>} onHideModal={hideGameListHandler}/>}
{tagFilterModal && <ModalCard content={<TagFilter onHideModal={hideTagFilterModal}/>} onHideModal={hideTagFilterModal}/>}
				</div>
			</ApolloProvider>
			<Footer />
		</BrowserRouter>
	)
}

export default App
