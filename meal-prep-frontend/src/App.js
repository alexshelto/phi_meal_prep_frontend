import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import IngredientsPage from './pages/IngredientPage'

import Header from './components/Header'

const App = () => {
  return (
    <>
      <Router>
        <div className='container'>
          <Header /> 
            <Routes>
              <Route path='/' element={ <Dashboard/> } />
            </Routes>
            <Routes>
              <Route path='/ingredients' element={ <IngredientsPage/> } />
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App
