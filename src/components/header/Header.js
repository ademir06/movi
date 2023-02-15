import React, {useContext, useState} from 'react';
import img from '../../img/Rectangle.svg'
import {NavLink, useNavigate} from "react-router-dom";
import {LanguageContext} from "../../context";
import {IoMdSearch} from "react-icons/io";

const Header = ({changeThame, mode}) => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const {setLanguage} = useContext(LanguageContext)
    const getSelectValue = (e) => {
        setLanguage(e.target.value)
    }
    const handleChange = (name) => {
        navigate(`/movies/movie-search/${name}`)
    }
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--img">
                        <NavLink to={'/'}><img src={img} alt=""/></NavLink>
                    </div>
                    <div className="header--movie">
                        <input onKeyDown={(e) => {
                            switch (e.key) {
                                case 'Enter':
                                    handleChange(value)
                                    break
                            }
                        }}
                               onChange={(event) => setValue(event.target.value)} type="text"
                               placeholder='search movie...'/>
                        <button onClick={() => handleChange(value)}>
                            <IoMdSearch/>
                        </button>
                    </div>
                    <div className="header--one">
                        <div className="header--one--text">
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/Recipes'}>Recipes</NavLink>
                            <NavLink to={'/Popular'}>Popular</NavLink>
                            <NavLink to={'/NowPlaying'}>NowPlaying</NavLink>
                            <NavLink to={'/topRated'}>TopRated</NavLink>
                        </div>
                        <div className="header--one--btn">
                            <button onClick={() => changeThame(mode)}
                                    className='left'>Request demo
                            </button>
                            <select className='right' name='' id='' onChange={getSelectValue}>
                                <option value='en-US'>English</option>
                                <option value='tr-TR'> Turkey</option>
                                <option value='ru-RU'> русский</option>
                                <option value='fr-FR'> франс</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;