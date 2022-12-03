import Heading from "../components/Heading";
import Image from "next/future/image";
import React from "react";
import Slider from "react-slick";
import style from '../styles/SliderOursClients.module.scss'
import {sliderOursClientsData} from '../public/data/dataMain'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className='button__arroy button__arroy_next'>
            <img src='/arroy-slider.svg' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className='button__arroy button__arroy_prev'>
            <img src='/arroy-slider.svg' />
        </div>
    );
}

export default function SliderOursClients() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
        ],
        customPaging: i => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    color: "blue",
                    border: "1px red solid",
                    borderRadius: "50%"
                }}
            >

            </div>
        )
    };

    return (
        <section className={`content-section ${style.section}`}>
            <div className="container">
                <div className={style.content}>

                    <Heading text="Наши клиенты" tag="h3" />

                    <Slider {...settings}>
                        {sliderOursClientsData.map(({id, name, img}) => {
                            return (
                                <div key={id} style="display:flex" className={style.item}>
                                    <Image
                                        className={style.image}
                                        alt="фото"
                                        width={225}
                                        height={113}
                                        src={img}
                                        quality="100"
                                    />
                                    <div className={style.info}>
                                        <span className={style.name}>{name}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    );
}