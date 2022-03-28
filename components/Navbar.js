import style from "../styles/Navbar.module.scss";
import React, { useState } from "react";
import Link from "next/link";
// import Image from 'next/image';


function Navbar() {
  const [isMenuOpen1, setMenuOpen1] = useState(false);
  const [isMenuOpen2, setMenuOpen2] = useState(false);

  function visibleMenu1() {
    setMenuOpen1(true);
  }

  function hidenMenu1() {
    setMenuOpen1(false);
  }

  function visibleMenu2() {
    setMenuOpen2(true);
  }

  function hidenMenu2() {
    setMenuOpen2(false);
  }

  return (
    <nav className={`${style.menu} font__light`}>
      <li className={style.menu_list} onMouseEnter={visibleMenu1} onMouseLeave={hidenMenu1}>
        <Link href="/"><a className={`${style.menu_link} ${style.menu_parents}`}>Продукция</a></Link>
        <ul className={`${style.childs_list} ${isMenuOpen1 ? `${style.childs_list_open}` : ""}`}>
          <Link href="/"><a className={`${style.menu_link} ${style.menu_child}`}>Дизельное топливо</a></Link>
          <Link href="/"><a className={`${style.menu_link} ${style.menu_child}`}>Бензин</a></Link>
          <Link href="/"><a className={`${style.menu_link} ${style.menu_child}`}>Керосин</a></Link>
          <Link href="/"><a className={`${style.menu_link} ${style.menu_child}`}>Газ</a></Link>
          <Link href="/"><a className={`${style.menu_link} ${style.menu_child}`}>Масло</a></Link>
        </ul>
      </li>
      <li className={style.menu_list} onMouseEnter={visibleMenu2} onMouseLeave={hidenMenu2}>
        <Link href="/"><a className={`${style.menu_link} ${style.menu_parents}`}>Услуги</a></Link>
        <ul className={`${style.childs_list} ${isMenuOpen2 ? `${style.childs_list_open}` : ""}`}>
          <Link href="/"><a className={`${style.menu_link} ${style.menu_child}`}>Перевалка и хранение ГСМ</a></Link>
          <Link href="/"><a className={`${style.menu_link} ${style.menu_child}`}>Доставка ГСМ</a></Link>
        </ul>
      </li>
      <li className={style.menu_list}>
        <Link href="/"><a className={style.menu_link}>О компании</a></Link>
      </li>
      <li className={style.menu_list}>
        <Link href="/"><a className={style.menu_link}>Акции</a></Link>
      </li>
      <li className={style.menu_list}>
        <Link href="/"><a className={style.menu_link}>Наши клиенты</a></Link>
      </li>
      <li className={style.menu_list}>
        <Link href="/"><a className={style.menu_link}>Партнеры</a></Link>
      </li>
      <li className={style.menu_list}>
        <Link href="/"><a className={style.menu_link}>Контакты</a></Link>
      </li>
    </nav>
  );
}

export default Navbar;