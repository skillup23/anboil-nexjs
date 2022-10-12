import { useEffect, useState, useRef } from 'react';
import style from '../styles/SliderOursClients.module.scss'
import Heading from "../components/Heading";
import Image from "next/future/image";

function SliderOursClients() {
    //   const [data, setData] = useState([]);
    const carousel = useRef(null);

    //   useEffect(() => {
    //     fetch('http://localhost:3000/static/shoes.json')
    //       .then((response) => response.json())
    //       .then(setData);
    //   }, []);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    //   if (!data || !data.length) return null;

    return (
        <section className={`content-section ${style.section}`}>
            <div className="container">
                <div className={style.content}>

                    <Heading text="Наши клиенты" tag="h3" />

                    <div className={style.carousel} ref={carousel}>
                        <div className={style.item}>
                            <Image
                                className={style.image}
                                alt="фото"
                                width={225}
                                height={113}
                                src={'/slider/bunker_company1.jpg'}
                                quality="100"
                            />
                            <div className={style.info}>
                                <span className={style.name}>Бункеровочные компании</span>
                            </div>
                        </div>
                        <div className={style.item}>
                            <Image
                                className={style.image}
                                alt="фото"
                                width={225}
                                height={113}
                                src={'/slider/bunker_company1.jpg'}
                                quality="100"
                            />
                            <div className={style.info}>
                                <span className={style.name}>Бункеровочные компании</span>
                            </div>
                        </div>
                        <div className={style.item}>
                            <Image
                                className={style.image}
                                alt="фото"
                                width={225}
                                height={113}
                                src={'/slider/bunker_company1.jpg'}
                                quality="100"
                            />
                            <div className={style.info}>
                                <span className={style.name}>Бункеровочные компании</span>
                            </div>
                        </div>
                        <div className={style.item}>
                            <Image
                                className={style.image}
                                alt="фото"
                                width={225}
                                height={113}
                                src={'/slider/bunker_company1.jpg'}
                                quality="100"
                            />
                            <div className={style.info}>
                                <span className={style.name}>Бункеровочные компании</span>
                            </div>
                        </div>
                        <div className={style.item}>
                            <Image
                                className={style.image}
                                alt="фото"
                                width={225}
                                height={113}
                                src={'/slider/bunker_company1.jpg'}
                                quality="100"
                            />
                            <div className={style.info}>
                                <span className={style.name}>Бункеровочные компании</span>
                            </div>
                        </div>
                        <div className={style.item}>
                            <Image
                                className={style.image}
                                alt="фото"
                                width={225}
                                height={113}
                                src={'/slider/bunker_company1.jpg'}
                                quality="100"
                            />
                            <div className={style.info}>
                                <span className={style.name}>Бункеровочные компании</span>
                            </div>
                        </div>
                        <div className={style.item}>
                            <Image
                                className={style.image}
                                alt="фото"
                                width={225}
                                height={113}
                                src={'/slider/bunker_company1.jpg'}
                                quality="100"
                            />
                            <div className={style.info}>
                                <span className={style.name}>Бункеровочные компании</span>
                            </div>
                        </div>
                        <div className={style.item}>
                            <Image
                                className={style.image}
                                alt="фото"
                                width={225}
                                height={113}
                                src={'/slider/bunker_company1.jpg'}
                                quality="100"
                            />
                            <div className={style.info}>
                                <span className={style.name}>Бункеровочные компании</span>
                            </div>
                        </div>
                        <div className={style.item}>
                            <Image
                                className={style.image}
                                alt="фото"
                                width={225}
                                height={113}
                                src={'/slider/bunker_company1.jpg'}
                                quality="100"
                            />
                            <div className={style.info}>
                                <span className={style.name}>Бункеровочные компании</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.buttons}>
                        <button onClick={handleLeftClick} className={`${style.button} ${style.button_left}`}>
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L6 6L1 1" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                        <button onClick={handleRightClick} className={`${style.button} ${style.button_right}`}>
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L6 6L1 1" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SliderOursClients;