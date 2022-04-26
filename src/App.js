import './App.css';
import Wordle from './pages/Wordle'
import GameOfLife from './pages/GameOfLife'
import Home from './pages/Home'
import Navbar from './components/NavBar/Navbar'
import { Routes, Route, Link } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";


function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <div>
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<Home></Home>} />
                        <Route exact path='/game_of_life' element={<GameOfLife></GameOfLife>}
                        />
                        <Route exact path='/wordle' element={<Wordle></Wordle>} />
                    </Routes>
                </div>
            </ThemeProvider>
        </MuiThemeProvider>
    );
}

export default App;
