import '../scss/day.scss';

export default function Day({dayNumber, selectedDay, onSetHandleClickedDay}) {
  return(
    <div className={`day ${selectedDay === dayNumber ? 'selected-day' : ''}`} onClick={() => onSetHandleClickedDay(dayNumber)}>
      {dayNumber}
    </div>
  )
}