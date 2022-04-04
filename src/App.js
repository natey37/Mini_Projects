import './App.css';
import GameOfLife from './pages/GameOfLife'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div>
            <h1>Mini Projects</h1>
            {/* <Router> */}
                <Routes>
                    <Route exact path='/game_of_life' element={<GameOfLife></GameOfLife>} />
                </Routes>
            {/* </Router> */}
        </div>
    );
}

export default App;
