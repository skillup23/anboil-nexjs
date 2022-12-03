import style from '../styles/ProductsMain.module.scss'
import Heading from "../components/Heading";
import Button from './Button';
import { useState } from 'react';
import {dt, bz, bt, gz, oi, kr} from '../public/data/dataMain'


function ProductsMain() {
    const [activeTab, setActiveTab] = useState('dt');
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

                </div>
            </div>
        </section>
    );

}

export default ProductsMain;