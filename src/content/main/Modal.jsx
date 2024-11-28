import React from "react"

export const Modal = ({setVisible, date}) =>{
    return(<div>
            Выберите услугу {date.toString()}
            <button onClick={() => setVisible(false)}> X </button>
            <ul>
                <li><button>Брови</button></li>
                <li><button>Макияж</button></li>
                <li><button>Макияж + укладка</button></li>
            </ul>

    </div>)
}