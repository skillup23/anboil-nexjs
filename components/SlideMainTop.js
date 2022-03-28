import style from '../styles/SlideMainTop.module.scss'
import Button from './Button';
import CalcMain from './CalcMain';
import { useState } from 'react';


function SlideMainTop() {
  const [activeSlide, setActiveSlide] = useState(true)

  function useActiveCalcAbout() {
    setActiveSlide(true)
  }

  function useActiveCalcCalc() {
    setActiveSlide(false)
  }

  return (
    <section className={style.section}>
      <div className={`${style.slide_top} ${style.slide_top_about} ${activeSlide ? `${style.slide_top_active}` : ""}`}>
        <div className="container">
          <div className={style.about}>
            <h1 className={`${style.title} font__extra`}>Надёжный поставщик качественных нефтепродуктов</h1>
            <p className={`${style.text} font__light`}>Хранение, перевалка и доставка топлива без&nbsp;потерь. Гарантия&nbsp;отсутствия примесей. Собственная ж/д ветка</p>
            <Button text="Подробнее" />
          </div>
        </div>
      </div>

      <div className={`${style.slide_top} ${style.slide_top_calc} ${activeSlide ? "" : `${style.slide_top_active}`}`}>
        <div className="container">
          <div className={style.calc}>
            <CalcMain />
            <div className={style.calc_result}>

            </div>
          </div>
        </div>
      </div>

      <div className={style.tabs}>
        <div className="container">
          <ul className={style.tabs_list}>
            <li onClick={useActiveCalcAbout}
              className={`${style.tab} font__light ${activeSlide ? `${style.tab_active}` : ""}`}>
              Перевалка, хранение и доставка
            </li>
            <li onClick={useActiveCalcCalc}
              className={`${style.tab} font__light ${activeSlide ? "" : `${style.tab_active}`}`}>
              Калькулятор
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SlideMainTop;