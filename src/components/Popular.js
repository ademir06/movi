import React, {useContext, useEffect} from 'react';
import {useState} from "react";
import axios from "axios";
import {APIKEY} from './lip/ApiKey'
import MovieCard from "./page/MovieCard";
import {LanguageContext} from "../context";

const Popular = () => {
    const {language} = useContext(LanguageContext)
    const [popular, setPopular] = useState([])
    const getPopular = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=1`)
        const {data} = await url
        await setPopular(data.results)
    }
    console.log(popular)
    useEffect(()=>{
        getPopular()
    },[language])
    return (
        <div id='movies'>
            <div className="container">
                <div className="movies">
                    {
                        popular.map(el =>
                            <MovieCard el={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;