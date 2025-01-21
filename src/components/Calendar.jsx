import { useState, useEffect } from 'react';
import Day from './Day';
import '../scss/calendar.scss';

export default function Calendar() {
  const years = [
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022,
    2023,
    2024,
    2025,
    2026,
    2027,
    2028,
    2029,
    2030,
  ];

  const months = [
    { name: "January", value: 1 },
    { name: "February", value: 2 },
    { name: "March", value: 3 },
    { name: "April", value: 4 },
    { name: "May", value: 5 },
    { name: "June", value: 6 },
    { name: "July", value: 7 },
    { name: "August", value: 8 },
    { name: "September", value: 9 },
    { name: "October", value: 10 },
    { name: "November", value: 11 },
    { name: "December", value: 12 },
  ];

  const weekDays = [
    { id: 1, name: "Monday" },
    { id: 2, name: "Tuesday" },
    { id: 3, name: "Wednesday" },
    { id: 4, name: "Thursday" },
    { id: 5, name: "Friday" },
    { id: 6, name: "Saturday" },
    { id: 7, name: "Sunday" },
  ];

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDays, setSelectedDays] = useState(null);

  const [selectedDay, setSelectedDay] = useState(null);

  const handleSelectYear = (year) => {
    setSelectedYear(() => year);
    setSelectedDays(() => getDays(year, selectedMonth.value))
  }

  const handleSelectMonth = (month) => {
    const filteredMonth = months.filter(mm => mm.name === month)
    setSelectedMonth(() => filteredMonth[0]);
    setSelectedDays(() => getDays(selectedYear, filteredMonth[0].value))
  }

  const getDays = (year, month) => {
    const days = new Date(year, month, 0).getDate();
    return days;
  }

  useEffect(() => {
    const year = new Date().getFullYear();

    setSelectedYear(() => year);
    setSelectedMonth(() => months[0]);
    setSelectedDays(() => getDays(year, months[0].value));

  }, []);

  const handleButtonMonthSelection = (direction) => {
    setSelectedDay(() => null);

    let year = null;
    let month = null;
    let position = null;

    if (direction === 'left') {
      year = (selectedMonth.name !== 'January' ? selectedYear : selectedYear - 1);
      position = (selectedMonth.value === 1 ? 11 : selectedMonth.value - 2);
    } else  {
      year = (selectedMonth.name !== 'December' ? selectedYear : selectedYear + 1);
      position = (selectedMonth.value === 12 ? 0 : selectedMonth.value);
    }

    month = months[position];

    handleSelectYear(year);
    handleSelectMonth(month.name);
  }

  const days = Array.from({length: selectedDays}, (_, i) => i + 1);

  const handleClickedDay = (day) => {
    if (selectedDay === day) {
      setSelectedDay(() => null);
      return
    }

    setSelectedDay(() => day);
  }

  return (
    <div className='calendar'>
      <div className='calendar-control'>
      <i className='bi bi-arrow-left-circle' onClick={() => handleButtonMonthSelection('left')}/>
        <div className='status'>
          <h4>{selectedMonth && selectedMonth.name}</h4>
          <h4>{selectedYear}</h4>
        </div>
        <i className='bi bi-arrow-right-circle' onClick={() => handleButtonMonthSelection('right')} />
      </div>

      <div className='week-days'>
        {
          weekDays.map(day => <div className='day-name' key={day.id}>{day.name}</div>)
        }
      </div>

      <div className='days'>
        {days.map((day, index) => <Day key={index} dayNumber={day} selectedDay={selectedDay} onSetHandleClickedDay={handleClickedDay}/>)}
      </div>
    </div>
  )
}