import style from '../styles/ProductsMain.module.scss'
import Heading from "../components/Heading";
import Button from './Button';
import { useState } from 'react';


function ProductsMain() {
    const [activeTab, setActiveTab] = useState('dt');
    
    const dt = [
        {
            id: 1,
            name: 'Дизельное топливо ЕВРО, летнее',
            subname: 'ДТЛ сорт С',
            density: '0.83',
            price: '64500',
        },
        {
            id: 2,
            name: 'Топливо низкозастывающее',
            subname: 'ТН',
            density: '0.83',
            price: '55450',
        },
        {
            id: 3,
            name: 'Топливный компонент селективной очистки',
            subname: 'ТКСО',
            density: '0.83',
            price: '54900',
        },
    ]

    const bz = [
        {
            id: 1,
            name: 'АИ-92-К5',
            subname: 'Бензин',
            density: '0.73',
            price: '51500',
        },
        {
            id: 2,
            name: 'АИ-95-К5',
            subname: 'Бензин',
            density: '0.74',
            price: '58000',
        },
    ];

    const bt = [
        {
            id: 1,
            name: 'Битум',
            subname: 'Дорожный',
            density: '0',
            price: '29400',
        },
    ];

    const gz = [
        {
            id: 1,
            name: 'ГАЗ ПБА',
            subname: 'Газ ПБА',
            density: '0.53',
            price: '24000',
        },
    ];

    const oi = [
        {
            id: 1,
            name: 'Масло',
            subname: 'Отсутствует',
            density: '0',
            price: '0',
        },
    ];

    const kr = [
        {
            id: 1,
            name: 'Керосин',
            subname: 'Отсутствует',
            density: '0',
            price: '0',
        },
    ];

    const [activeContent, setActiveContent] = useState(dt);

    function  onAtributContent(item, tab) {
        setActiveTab(tab);
        setActiveContent(item);
    }


    return (
        <section className={`content-section ${style.section}`}>
            <div className="container">
                <div className={style.content}>
                    <Heading text="Продукты" tag="h3" color="--text-color-light" />

                    <ul className={`${style.tabs} font__light`}>
                        <li onClick={() => onAtributContent(dt, 'dt')}
                        className={`${style.tab} ${activeTab == 'dt' ? `${style.active}` : ''}`}>
                            Дизельное топливо
                        </li>
                        <li onClick={() => onAtributContent(bz, 'bz')}
                        className={`${style.tab} ${activeTab == 'bz' ? `${style.active}` : ''}`}>
                            Бензин
                        </li>
                        <li onClick={() => onAtributContent(bt, 'bt')}
                        className={`${style.tab} ${activeTab == 'bt' ? `${style.active}` : ''}`}>
                            Битум
                        </li>
                        <li onClick={() => onAtributContent(gz, 'gz')}
                        className={`${style.tab} ${activeTab == 'gz' ? `${style.active}` : ''}`}>
                            Газ
                        </li>
                        <li onClick={() => onAtributContent(oi, 'oi')}
                        className={`${style.tab} ${activeTab == 'oi' ? `${style.active}` : ''}`}>
                            Масло
                        </li>
                        <li onClick={() => onAtributContent(kr, 'kr')}
                        className={`${style.tab} ${activeTab == 'kr' ? `${style.active}` : ''}`}>
                            Керосин
                        </li>
                    </ul>

                    <div className={style.products}>
                        {activeContent.map(({ id, name, subname, density, price }) => (
                            <div key={id} className={style.product}>
                                <h4 className={`${style.name} font__extra`}>{name}</h4>
                                <h5 className={`${style.subname} font__light`}>{subname}</h5>
                                <p className={`${style.text} font__light`}>ПЛОТНОСТЬ <span>{density}</span></p>
                                <p className={`${style.text} font__light`}>ЦЕНА ЗА ЛИТР <span>{(price * density / 1000).toFixed(2)} ₽</span></p>
                                <p className={`${style.text} ${style.price} font__light`}>ЦЕНА ЗА ТОННУ <span>{price} ₽</span></p>
                            </div>
                        ))}
                    </div>

                    <Button text='В каталог' link='/' position='center'/>






                    {/* <div className={style.column}>
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
                        <Button text="Подробнее" link={activeContent ? slide1.link : slide2.link} />
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
                    </div> */}
                </div>
            </div>
        </section>
    );

}

export default ProductsMain;