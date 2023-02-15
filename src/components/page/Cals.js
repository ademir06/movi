import React from 'react';
import PERSON from '../../img/person-icon-260nw-282598823.webp'
import Slider from "react-slick"
import {Link, NavLink} from "react-router-dom";

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

const Cals = ({cart}) => {
    return (
        <>
            <div id="cart">
                <div className="container">
                        <div className="cart">
                            <Slider {...settings}>

                            {
                                cart.map(el=>(
                                    <Link to={`/Index/detail-cast/${el.id}`}>
                                        <div className='cart-cast'>
                                            {el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`} width={120} alt=""/> :
                                                <img src={PERSON} width={120} alt=""/>}
                                            <h4>{el.name}</h4>
                                        </div>
                                    </Link>

                                ))
                            }
                            </Slider>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Cals;