import { useState } from 'react'
import { Link } from "react-router-dom";
import h from "./headerMenu.module.css"
import img from"./content/img/logo.png"

export function App() {
  return (
    <div className={h.wrapper}>
            <header>
                <div className={h.logo}>
                    <img alt="logo of the site" src={img} width="60" height="60px"/>
                </div>
                <div className={h.menu}>
                    <ul>
                        <li><Link to="/about">Обо мне</Link></li>
                        <li><Link to="/price">Цена</Link></li>
                        <li><Link to="/appointment">Записи</Link></li>
                    </ul>
                </div>
                <div className={h.inst}>
                        <a href="#">example</a>
                </div>
            </header>
    </div>
  )
}

