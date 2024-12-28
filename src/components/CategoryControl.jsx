import {useState, useEffect} from 'react';
import '../scss/category-control.scss';


export default function CategoryControl({id, onSetCreateNewSection, sections, onSetCreateNewTicket}) {

  const [isVisble, setIsVisible] = useState(false);
  const [toShowInSection2, setToShowInSection2] = useState(null);

  // To track the section name and color
  const [sectionName, setSectionName] = useState('');
  const [sectionColor, setSectionColor] = useState('#7D7D7D');

  // To track the ticket name and which section it belongs
  const [ticketName, setTicketName] = useState('');
  const [ticketBelongs, setTicketBelongs] = useState(null);


  const handleSetOverlay = (showItInSection2) => {

    if (toShowInSection2 === 'section') {
      // If element to be show in section-2 is the add element
      // then reset it's state value to be empty
      setSectionName(() => '');
    } else if (toShowInSection2 === 'ticket') {
      setTicketName('');
      setTicketBelongs(null);
    }

    setIsVisible(prev => !prev);
    setToShowInSection2(() => showItInSection2)
  }

  const handleSaveFromInputForNewSection = () => {
    setIsVisible(prev => !prev);
    onSetCreateNewSection(id, sectionName, sectionColor)
    setSectionColor('#7D7D7D');
  }

  const handleSaveTicketToSection = () => {
    setIsVisible(prev => !prev);

    // Can't continue if ticket has no name or doesn't belong to a section
    if (ticketName.length === 0 || ticketBelongs === null) return;

    onSetCreateNewTicket(ticketBelongs, ticketName);
  }

  const sectionColors = [
    "#FF4500", // Red-Orange
    "#FFA500", // Orange
    "#FFD700", // Gold
    "#32CD32", // Lime Green
    "#1E90FF", // Dodger Blue
    "#4B0082", // Indigo
    "#EE82EE"  // Violet
  ];

  // Declare all section elements
  const section2Elements = {
    'calendar': <div className='calendar-section-2'>
      Calendar is unavailable!
    </div>,
    'section': <div className='add-section-2'>
      <input className='add-new-section' onChange={(e) => setSectionName(prev => e.target.value)} value={sectionName}/>
      <div className='add-section-colors'>
        {sectionColors.map(color => 
          <button
            key={color}
            onClick={() => setSectionColor(color)}
            style={{
              backgroundColor: color, 
              border: sectionColor === color ? '3px solid black' : '2px solid transparent',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer'
            }}
          />
        )}
      </div>
      <button onClick={handleSaveFromInputForNewSection}>Save</button>
      <button onClick={() => handleSetOverlay(null)}>Abort</button>
    </div>,
    'ticket': <div className='ticket-section-2'>
      {sections.length === 0 ?
        'Create sections before creating tickets!'
        :
        <div className="ticket-create">
          <input value={ticketName} onChange={(e) => setTicketName(e.target.value)} />
          <h3>Assign to a section</h3>
          {
            sections.map(section =>
              <div key={section.id}>
                <h4>{section.name}</h4>
                <button
                  key={section.id}
                  onClick={() => setTicketBelongs(() => section.id)}
                  style={{ 
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                    border: (ticketBelongs === section.id ? '2px solid black' : 'none'),
                    backgroundColor: section.color
                  }}
                />
              </div>
            )
          }
          <button onClick={handleSaveTicketToSection}>Save</button>
          <button onClick={() => handleSetOverlay(null)}>Abort</button>
        </div>

      }
    </div>
  };

  return (
    <div className="category-control">

      <div className="controls-1" onClick={() => handleSetOverlay('calendar')}>
        <i className="bi bi-calendar"/> Calendar
      </div>

      <div className="controls-2" onClick={() => handleSetOverlay('section')}>
        <i className="bi bi-plus" /> Section
      </div>

      <div className="controls-3" onClick={() => handleSetOverlay('ticket')}>
        <i className="bi bi-plus" /> Ticket
      </div>

      <div className={`overlay ${isVisble ? 'visible' : ''}`}>
        <div className="section-1">
          <i className="bi bi-x-lg" onClick={() => handleSetOverlay(null)}/>
        </div>
        <div className="section-2">
          {toShowInSection2 && section2Elements[toShowInSection2]}
        </div>
      </div>
    </div>
  )
}