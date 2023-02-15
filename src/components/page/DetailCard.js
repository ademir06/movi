import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../lip/ApiKey";
import Cals from "./Cals";
import MovieVideo from "./MoviVideo/MovieVideo";


const DetailCard = () => {
    const {movieId} = useParams()
    const [detail, setDetail] = useState({})
    const [cart, setCart] = useState([])
    const getDetail = async (id) => {
        try {
            const url = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`)
            const {data} = await url
            await setDetail(data)
        } catch (e) {
            console.log('Error..', e)
        }
    }
    const getCart = async (id, apikey) => {
        try {
            const url = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}&language=en-US`)
            const {data} = await url
            await setCart(data.cast)
        } catch (e) {
            console.log(e)
        }
        console.log(cart)
    }

    const {poster_path, backdrop_path, title, release_date, overview, vote_average} = detail
    useEffect(() => {
        getDetail(movieId)
        getCart(movieId, APIKEY)
    }, [])
    return (
        <>
            <div id="detail-card" style={{
                background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}") no-repeat left/cover`
            }}>
                <div className="container">
                    <div className="detail-card">
                        <img  className='images' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`} width={350}
                             style={{width: '450px', height: '550px', objectFit: 'contain'}} alt=""/>
                        <div className="detail-card--description">
                            <h2>{title} ({release_date ? release_date.slice(0, 4) : ""})</h2>
                            <p>{title}</p>
                            <p>{overview}</p>
                            <div className="vote">
                                <h3>
                                    {Math.round(vote_average * 10)} %
                                </h3>
                            </div>
                            <div style={{width: '700px', height: '350px', paddingTop: '40px'}}>
                                <Cals cart={cart}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MovieVideo movieId={movieId}/>
        </>
    );
};

export default DetailCard;