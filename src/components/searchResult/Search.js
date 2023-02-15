import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../lip/ApiKey";
import {useParams} from "react-router-dom";
import MovieCard from "../page/MovieCard";

const Search = () => {
    const [result, setResalt] = useState([])
    const [totalpage, setTotalpage] = useState(1)
    const [current, setCurrent] = useState(1)
    const {movieName} = useParams()

    const getresalt = async (name, apikey) => {
        const url = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${name}&page=${current}`)
        const {data} = await url
        setResalt(data.results)
        setTotalpage(data.total_pages)
        console.log(data)
    }
    useEffect(() => {
        getresalt(movieName, APIKEY)
    })

    return (
        <div id='movies'>
            {
                result.length ?
                    <div className="container">
                        <div className="movies">
                            {
                                result.map(el => <MovieCard el={el}/>)
                            }

                        </div>
                        <div style={{display: "flex", justifyContent: 'space-between', cursor: 'pointer'}}>
                            <button style={{
                                visibility: current === 1 ? 'hidden' : 'visible'
                            }} onClick={() => setCurrent(current - 1)} className='btn'>prev
                            </button>
                            <button style={{
                                visibility: current === totalpage ? 'hidden' : 'visible'
                            }} onClick={() => setCurrent(current + 1)} className='btn'>next
                            </button>
                        </div>
                    </div> :
                    <div className='container'>
                        <div style={{
                            padding: '15% 0'
                        }}>
                            <h1>фильм который вы искали не найдено</h1>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Search;