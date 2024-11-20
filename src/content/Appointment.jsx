import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

export const Appointment = () => {
  const [value, onChange] = useState(new Date());

  const cur_day = new Date()
  const day = cur_day.getDate()
  const cur_year = cur_day.getFullYear()
  const max_year = cur_year + 1
  const month = cur_day.getMonth()

  console.log(new Date(max_year, month, new Date(cur_day.getDate())))

  return (
    <main>
        <div>
        <Calendar 
            onChange={onChange} 
            value={value} 
            minDate={cur_day}
            maxDate={new Date(max_year, month, day)}
            minDetail='year'
            
            />
        </div>
    </main>
  );
}