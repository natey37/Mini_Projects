import './App.css';
import { Router, Routes, Route } from 'react-router'
import GameOfLife from './pages/GameOfLife'

function App() {
    return (
        <div>
            <h1>Mini Projects</h1>
            <Router>
                <Routes>
                    <Route exact path='/game_of_life' component={GameOfLife} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
