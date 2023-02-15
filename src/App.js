import './App.scss';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Popular from "./components/Popular";
import NowPlaying from "./components/NowPlaying";
import TopRated from "./components/TopRated";
import DetailCard from "./components/page/DetailCard";
import DetailActors from "./components/DetailActors/Index";
import {useState} from "react";
import Search from "./components/searchResult/Search";

function App() {
    const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode')) || false)
    const changeThame = (mode) => {
        setMode(!mode)
        localStorage.setItem('mode', JSON.stringify(!mode))
    }
    return (
        <div className='App' style={{
            background: mode ? 'black' : '', color: mode ? '#FFF' : ''
        }}>
            <Header changeThame={changeThame} mode={mode}/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/Recipes'} element={<Recipes/>}/>
                <Route path={'/Popular'} element={<Popular/>}/>
                <Route path={'/NowPlaying'} element={<NowPlaying/>}/>
                <Route path={'/topRated'} element={<TopRated/>}/>
                <Route path={'/movies/movie-info/:movieId'} element={<DetailCard/>}/>
                <Route path={'/Index/detail-cast/:castId'} element={<DetailActors/>}/>
                <Route path={'/movies/movie-search/:movieName'} element={<Search/>}/>
            </Routes>
        </div>
    );
}

export default App;
