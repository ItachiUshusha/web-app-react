import { useState } from 'react'
import { Link } from "react-router-dom";
import h from "./headerMenu.module.css"
import img from"./content/img/logo.png"

export function App() {

  const [active, setActive] = useState(''); 

  const makeActive = (value) =>{
    setActive(value)
  }


  return (
    <div className={h.wrapper}>
            <header>
                <div className={h.logo}>
                    <img alt="logo of the site" src={img} width="60" height="60px"/>
                </div>
                <div className={h.menu}>
                    <ul>
                        <li><Link to="/about" onClick={()=>makeActive('about')} className={active === 'about' ? h.active : ''}>Обо мне</Link></li>
                        <li><Link to="/price" onClick={()=>makeActive('price')} className={active === 'price' ? h.active : ''}>Цена</Link></li>
                        <li><Link to="/appointment" onClick={()=>makeActive('appointment')} className={active === 'appointment' ? h.active : ''}>Записи</Link></li>
                    </ul>
                </div>
                <div className={h.inst}>
                        <a href="#">example</a>
                </div>
            </header>
    </div>
  )
}

