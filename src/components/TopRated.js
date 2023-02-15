import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "./lip/ApiKey";
import MovieCard from "./page/MovieCard";
import {LanguageContext} from "../context";

const TopRated = () => {
    const {language} = useContext(LanguageContext)
    const [topRated, setTopRated] = useState([])
    const getTopRated = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${language}&page=1`)
        const {data} = await url
        await setTopRated(data.results)
    }
    useEffect(() => {
        getTopRated()
    })
    return (
        <div id='movies'>
            <div className="container">
                <div className="movies">
                    {
                        topRated.map(el => <MovieCard el={el}/>)
                    }
                </div>
            </div>
        </div>

    );
};

export default TopRated;