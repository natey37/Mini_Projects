import './App.css';
import TicTacToe from './pages/TicTacToe'
import Wordle from './pages/Wordle'
import GameOfLife from './pages/GameOfLife'
import Home from './pages/Home'
import Navbar from './components/NavBar/Navbar'
import { Routes, Route} from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";


function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/game_of_life' element={<GameOfLife />} />
                    <Route exact path='/wordle' element={<Wordle />} />
                    <Route exact path='/tic_tac_toe' element={<TicTacToe />} />
                </Routes>
            </ThemeProvider>
        </MuiThemeProvider>
    );
}

export default App;
