import './App.css';
import GameOfLife from './pages/GameOfLife'
import Home from './pages/Home'
import Navbar from './components/NavBar/Navbar'
import { Routes, Route, Link } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react'

const theme = {
    colors: {
        primary: 'hotpink'
    }
}

function App() {
    return (
        // <ThemeProvider theme={theme}>
        <div>
            <Navbar />
            {/* <h1>Mini Projects</h1> */}
            {/* <Link to='/game_of_life'>Game of Life</Link> */}
            {/* <Router> */}
            <Routes>
                <Route exact path='/' element={<Home></Home>} />
                <Route exact path='/game_of_life' element={<GameOfLife></GameOfLife>} />
            </Routes>
            {/* </Router> */}
        </div>
        // </ThemeProvider>
    );
}

export default App;
