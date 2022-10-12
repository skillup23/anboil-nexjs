import style from '../styles/CalcMain.module.scss'
import { useState } from 'react';
import Button from './Button';

function CalcMain() {
  const [activeCalc, setActiveCalc] = useState(false)

  function useActiveCalc() {
    setActiveCalc(!activeCalc)
  }

  return (
    <div className={style.calcforms}>
      <h4 className={`${style.title} font__extra`}>Рассчитать стоимость</h4>
      <div className={style.options_list}>
        <h4 onClick={useActiveCalc}
          className={`${style.option} font__extra ${activeCalc ? "" : `${style.option_active}`}`}>
          Доставки /
        </h4>
        <h4 onClick={useActiveCalc}
          className={`${style.option} font__extra ${activeCalc ? `${style.option_active}` : ""}`}>
          &nbsp;Хранения и перевалки
        </h4>
      </div>
      <div className={`${style.container_form} ${activeCalc ? "" : `${style.container_form_active}`}`}>
        <form className={style.form}>
          <div className={style.container_input}>
            <div className={style.input_img}></div>
            <input className={`${style.input_text} font__light`}
              type="text"
              placeholder="Откуда"
              name="point_from"
              required="required"
              aria-required="true">

            </input>
          </div>
          <div className={style.container_input}>
            <div className={style.input_img}></div>
            <input className={`${style.input_text} font__light`}
              type="text"
              placeholder="Куда"
              name="point_to"
              required="required"
              aria-required="true">

            </input>
          </div>
          <Button text="Рассчитать" />
          <p className={`${style.explanation} font__light`}>
            * Минимальное расстояние для расчета от 70 км. До 70 км. рассчитывается индивидуально.
          </p>
        </form>
      </div>
      <div className={`${style.container_form} ${activeCalc ? `${style.container_form_active}` : ""}`}>
        <form className={style.form}>
          <div className={style.container_input}>
            <div className={style.input_img}></div>
            <input className={`${style.input_text} ${style.img_position} font__light`}
              type="number"
              placeholder="Объем (тонн)"
              name="valye-t"
              required="required"
              aria-required="true">

            </input>
          </div>
          <div className={style.container_input}>
            <div className={style.input_img}></div>
            <input className={`${style.input_text} ${style.img_position} font__light`}
              type="number"
              placeholder="Срок (дней)"
              name="time"
              required="required"
              aria-required="true"></input>
          </div>
          <Button text="Рассчитать" />
        </form>
      </div>
    </div>
  );
}

export default CalcMain;