import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import { Modal } from './Modal' 

export const Appointment = () => {

  const [value, onChange] = useState(new Date())
  const [visible, setVisible] = useState(false)

  const cur_day = new Date()
  const day = cur_day.getDate()
  const cur_year = cur_day.getFullYear()
  const max_year = cur_year + 1
  const month = cur_day.getMonth()

  return (
    <main>
        <div>
        {!visible && (<Calendar 
            onChange={onChange} 
            value={value} 
            minDate={cur_day}
            maxDate={new Date(max_year, month, day)}
            minDetail='year'
            onClickDay={() => setVisible(true)}/>)}

            {visible && (<Modal setVisible={setVisible} date={value}/>)}
            

        </div>
    </main>
  );
}