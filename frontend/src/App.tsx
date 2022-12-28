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

const client = new ApolloClient({
	uri: 'http://localhost:1337/graphql',
	cache: new InMemoryCache(),
})

function App() {
const [modalIsShown,setModalIsShown] = useState(false)

const showModalHandler = () =>{
	setModalIsShown(true)
}
const hideModalHandler = () =>{
	setModalIsShown(false)
}

	return (
		<BrowserRouter>
			<ApolloProvider client={client}>
				<div>
					<Navigation onShowModal={showModalHandler}/>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/category/:id' element={<Category />} />
						<Route path='/tag/:id' element={<Tag />} />
						<Route path='/game/:id' element={<Game />} />
						<Route path='/post/:id' element={<Post />} />
					</Routes>
					{modalIsShown && <Test onHideModal={hideModalHandler}/>}
				</div>
			</ApolloProvider>
			<Footer />
		</BrowserRouter>
	)
}

export default App
