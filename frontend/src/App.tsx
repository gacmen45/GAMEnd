import './App.module.scss'

import Home from './pages/home/Home'
import Navigation from './components/navigation/Navigation'
import { Routes, Route,BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<div>
         <BrowserRouter>
				<Navigation />
			<Routes>
         <Route path='/' element={<Home/>}/>
			</Routes>
         </BrowserRouter>
		</div>
	)
}

export default App
