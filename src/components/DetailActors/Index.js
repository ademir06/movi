import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {APIKEY} from "../lip/ApiKey";
import Slider from 'react-slick'


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const DetailActors = () => {
    const {castId} = useParams()
    const [detailCast, setDetailCast] = useState({})
    const [ViewMore, setViewMore] = useState(400)
    const [movieCast, setMovieCast] = useState([])
    const getDetailCast = async (id, apikey) => {
        const url = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${apikey}&language=en-US`)
        const {data} = await url
        setDetailCast(data)
    }

    const getMovieCast = async (id, apikey) => {
        const url = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apikey}&language=en-US`)
        const {data} = await url
        setMovieCast(data.cast)
    }
    console.log(movieCast)
    const toggleViewMore = (text) => {
        setViewMore(ViewMore === 400 ? text.length : 400)
    }
    useEffect(() => {
        getDetailCast(castId, APIKEY)
        getMovieCast(castId, APIKEY)
    }, [])
    const {profile_path, name, biography, place_of_birth} = detailCast
    console.log(detailCast)
    return (
        <div id='detail-cast'>
            <div className="container">
                <div className="detail-cast">
                    <div>
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt=""/>
                    </div>
                    <div className="detail-cast-desc">
                        <h1>{name}</h1>
                        <h3>{place_of_birth}</h3>
                        <p>{biography ? biography.slice(0, ViewMore) : biography}</p>
                        {
                            biography ? biography.length >= 400 ? <span onClick={() => {
                                toggleViewMore(biography)
                            }
                            } style={{color: 'blue', cursor: 'grab'}}>
                               {ViewMore === 400 ? 'читать дальше..' : 'свернуть'}</span> : '' : ''
                        }

                    </div>
                </div>
                <Slider {...settings}>
                    {
                        movieCast.map(el => (
                            <div >
                                <Link to={`/movies/movie-info/${el.id}`} style={{margin:'30px 0'}}>
                                    <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${el.poster_path}`}
                                         width={170} alt=""/>
                                </Link>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default DetailActors;