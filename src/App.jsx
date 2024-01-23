import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import GenrePage from './pages/GenrePage/GenrePage'
import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<RegisterPage /> } />
      <Route path='/genre' element={<GenrePage /> } />
      <Route path='/' element={<HomePage /> }></Route>
      <Route path='/movie' element={<MoviesPage /> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
