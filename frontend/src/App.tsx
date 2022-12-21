import './App.module.scss'

import Home from './pages/home/Home'
import Navigation from './components/navigation/Navigation'
import Category from './pages/category/Category'
import { Routes, Route,BrowserRouter } from 'react-router-dom'
import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client'
import Post from './pages/post/Post'
import Footer from './components/footer/Footer'
import Tag from './pages/tag/Tag'

const client = new ApolloClient({
   uri: 'http://localhost:1337/graphql',
   cache: new InMemoryCache()
})


function App() {
	return (
         <BrowserRouter>
         <ApolloProvider client={client} >
		<div>
				<Navigation />
			<Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/category/:id' element={<Category/>}/>
         <Route path='/tag/:id' element={<Tag/>}/>
         <Route path='/post/:id' element={<Post/>}/>
			</Routes>
		</div>
      </ApolloProvider>
      <Footer/>
         </BrowserRouter>
	)
}

export default App
