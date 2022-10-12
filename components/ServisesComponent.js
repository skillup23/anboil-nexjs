import style from '../styles/ServisesComponent.module.scss'
import Heading from "../components/Heading";
import Button from './Button';
import Image from "next/future/image";
import { useState } from 'react';


function ServisesComponent() {
    const [activeContent, setActiveContent] = useState(true)

    const slide1 =
        { 
            id: 1, 
            text: 'Наш парк современных резервуаров оснащен соответствующими контрольными приборами и укомплектован по всем правилам безопасности.', 
            link: '/1', 
            img: '/servises/servises1.jpg',
        };

      const slide2 =
        { 
            id: 1, 
            text: 'Собственный парк бензовозов и учет особенностей каждого вида топлива – гарантия выгоды и оперативности для вас. Независимо от объема и местоположения.', 
            link: '/2', 
            img: '/servises/servises2.jpg',
        };


    return (
        <section className={`content-section ${style.section}`}>
            <div className="container">
                <div className={style.content}>
                    <Heading text="Услуги" tag="h3" />
                    <div className={style.columns}>
                        <div className={style.column}>
                            <div className={style.tabs}>
                                <a 
                                onClick={() => setActiveContent(true)} 
                                className={`${style.tab} font__extra ${activeContent ? `${style.tab_active}` : ''}`}>
                                    Перевалка и хранение ГСМ
                                </a>
                                <a 
                                onClick={() => setActiveContent(false)} 
                                className={`${style.tab} font__extra ${activeContent ? '' : `${style.tab_active}`}`}>
                                    Доставка ГСМ
                                </a>
                            </div>
                            <p className={`${style.text} font__light`}>{activeContent ? slide1.text : slide2.text}</p>
                            <Button text="Подробнее" link={activeContent ? slide1.link : slide2.link}/>
                        </div>
                        <div className={style.column}>
                            <Image 
                                className={style.img} 
                                alt="фото" 
                                width={560} 
                                height={420} 
                                src={activeContent ? slide1.img : slide2.img} 
                                quality="100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default ServisesComponent;