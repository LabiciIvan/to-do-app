import {useState} from 'react';
import '../scss/category-section.scss';
import Ticket from './Ticket';

export default function CategorySection({section, onSetSaveNewSectionName, onSetDeleteSectionFromCategory, onSetSaveNewSectionToCategory}) {
  const [expand, setExpand] = useState(true);
  const [sectionName, setSectionName] = useState(section.name);
  const [editSectionName, setEditSectionName] = useState(false);

  function hexToRgb(hex) {
    const sanitizedHex = hex.replace('#', '');

    // Parse the color
    const bigint = parseInt(sanitizedHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r}, ${g}, ${b}`;
  }

  const sectionTextStyle = {
    backgroundColor: `rgba(${hexToRgb(section.color)}, 0.15)`,
    color: section.color,
  }

  const iconStyle = {
    fontSize: '20px',
    transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  };

  const handleExpandToggle = () => {
    setExpand(prev => !prev)
  }

  const handleEditSectionName = (key, id) => {
    if (key === 'Enter') {
      onSetSaveNewSectionName(sectionName, id);
      setEditSectionName(prev => !prev);
    } else if (key === 'Escape') {
      setSectionName(() => section.name);
      setEditSectionName(prev => !prev);
    }
  }

  const handlePriorityChangeOnTicket = (ticket) => {
    // Ticket priority handled in Ticket component
    // Update directly the tickets with correct ticket
    const ticketsUpdated = section.tickets.map(sectionTicket => sectionTicket.id === ticket.id ? ticket : sectionTicket);

    // Update sections with updated tickets
    const sectionUpdated = {...section, tickets: ticketsUpdated};

    onSetSaveNewSectionToCategory(section.id, sectionUpdated);
  }

  return (
    <div className="category-section">
      <div className="section-name">
        <i className="bi bi-arrow-down-short" onClick={handleExpandToggle} style={iconStyle}/>
        {editSectionName ? <input className='edit-section-name' autoFocus value={sectionName} onChange={(e) => setSectionName(e.target.value)} onKeyDown={(e) => handleEditSectionName(e.key, section.id)} /> : <h3 style={sectionTextStyle}> {section.name} </h3> }
        <div className='section-control'>
          <div className='absolute-icons'>
            {!editSectionName &&
            <>
              <i className='bi bi-trash-fill' onClick={() => onSetDeleteSectionFromCategory(section.id)}/>
              <i className='bi bi-pencil-square' onClick={() => setEditSectionName(prev => !prev)}/>
            </>
            }
          </div>
        </div>
      </div>
      <div className={`section-tickets ${expand ? 'expanded' : ''}`}>
        {section.tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} onSetHandlePriorityChange={handlePriorityChangeOnTicket}/>
        )}
      </div>
    </div>
  )
}