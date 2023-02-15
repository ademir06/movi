import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../lip/ApiKey";

const MovieVideo = ({movieId}) => {
    const [video, setVideo] = useState([])
    const getVideos = async (id, apikey) => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}&language=en-US`)
        const {data} = await url
        setVideo(data.results)
    }
    console.log(video)
    useEffect(() => {
        getVideos(movieId, APIKEY)
    })
    return (
        <div id='video'>
            <div className="container">
                <div style={{padding:'20px'}}>
                    {
                        video.slice(0,3).map(el => (
                            <iframe style={{margin:'20px 40px'}} width="350" height="300" src={`https://www.youtube.com/embed/${el.key}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieVideo;