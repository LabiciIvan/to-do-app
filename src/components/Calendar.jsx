import { useState, useEffect } from 'react';
import Day from './Day';

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

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDays, setSelectedDays] = useState(null);

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
    console.log('days', days);
    return days;
  }

  useEffect(() => {
    const year = new Date().getFullYear();

    setSelectedYear(() => year);
    setSelectedMonth(() => months[0]);
    setSelectedDays(() => getDays(year, months[0].value));

  }, []);

  const days = Array.from({length: selectedDays}, (_, i) => i + 1);

  return (
    <div className='calendar'>
      <select onChange={(e) => handleSelectYear(e.target.value)} >
        {years.map((year, index)=> <option key={index} value={year}>{year}</option>)}
      </select>

      <select onChange={(e) => handleSelectMonth(e.target.value)}>
        {months.map((month, index)=> <option key={index} value={month.name}>{month.name}</option>)}
      </select>

      <h4>{selectedYear}</h4>
      <h4>{selectedMonth && selectedMonth.name}</h4>
      <h4>{selectedDays}</h4>

      <div className='days'>
        {days.map((day, index) => <Day key={index} dayNumber={day}/>)}
      </div>
    </div>
  )
}