import './App.css';
import GameOfLife from './pages/GameOfLife'
import Navbar from './components/Navbar'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
    return (
        <div>
            <Navbar/>
            {/* <h1>Mini Projects</h1> */}
            {/* <Link to='/game_of_life'>Game of Life</Link> */}
            {/* <Router> */}
            <Routes>
                <Route exact path='/game_of_life' element={<GameOfLife></GameOfLife>} />
            </Routes>
            {/* </Router> */}
        </div>
    );
}

export default App;
