import {useState} from 'react';
import '../scss/category-control.scss';
import Priority from './Priority';
import ColorSection from './ColorSection';
import Calendar from './Calendar';
import ProfileIcon from './ProfileIcon';


export default function CategoryControl({id, onSetCreateNewSection, sections, onSetCreateNewTicket, profile}) {

  const [isVisble, setIsVisible] = useState(false);
  const [toShowInSection2, setToShowInSection2] = useState(null);

  // To track the section name and color
  const [sectionName, setSectionName] = useState('');
  const [sectionColor, setSectionColor] = useState('#7D7D7D');

  // To track the ticket name, priority and which section it belongs
  const [ticketName, setTicketName] = useState('');
  const [ticketBelongs, setTicketBelongs] = useState(null);
  const [ticketPriority, setTicketPriority] = useState('low');

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

    onSetCreateNewTicket(ticketBelongs, ticketName, ticketPriority);
  }

  const handleTicketPriority = (type) => {
    setTicketPriority(() => type);
  }

  // Declare all section elements
  const section2Elements = {
    'calendar': <div className='calendar-section-2'>
      <Calendar />
    </div>,
    'section':
      <div className='create-new-section'>
        <input className='name' placeholder='Section name...' onChange={(e) => setSectionName(prev => e.target.value)} value={sectionName}/>
        <div className='colors'>
          <ColorSection onSetSectionColor={setSectionColor} colorSelected={sectionColor}/>
        </div>
        <div className="buttons">
          <button className='save btn' onClick={handleSaveFromInputForNewSection}>Save</button>
          <button className='abort btn' onClick={() => handleSetOverlay(null)}>Abort</button>
        </div>
      </div>,
    'ticket':
      <div className='create-new-ticket'>
        {sections.length === 0 ?
          <div className="error">
            Create sections before creating tickets!
          </div>
          :
          <>
            <input className='name' placeholder='Ticket name...' value={ticketName} onChange={(e) => setTicketName(e.target.value)} />
            <div className="wrapper-control">
              <p>Pick priority:</p>
              <Priority isExpanded={true} onSetPriorityAssignment={handleTicketPriority} addBorders={true} />
            </div>
            <div className='colors-pick-section'>
              {sections.map(section =>
                  <div
                    className='color-item'
                    key={section.id}
                    onClick={() => setTicketBelongs(() => section.id)}
                    style={{ 
                      cursor: 'pointer',
                      border: (ticketBelongs === section.id ? '2px solid black' : 'none'),
                     }}
                  >
                    <h4>{section.name}</h4>
                    <button
                      key={section.id}
                      style={{
                        cursor: 'pointer',
                        borderRadius: '50%',
                        border: 'none',
                        width: '20px',
                        height: '20px',
                        backgroundColor: section.color
                      }}
                    />
                  </div>
                )}
            </div>
            <div className="buttons">
              <button className='save btn' onClick={handleSaveTicketToSection}>Save</button>
              <button className='abort btn' onClick={() => handleSetOverlay(null)}>Abort</button>
            </div>
          </>
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

      <div className="controls-5">
        <ProfileIcon profile={profile} width={39} height={39} providedMessage={'Select a profile'}/>
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