import {AiOutlineStar} from "react-icons/ai";
import {Link} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
        <div className="card">
            <Link to={`/movies/movie-info/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
            </Link>
            <h4>{el.title} </h4>
            <p>{el.release_date}</p>
            <div className='lineStar'>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
            </div>
        </div>
    );
};

export default MovieCard;