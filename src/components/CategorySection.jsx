import {useState} from 'react';
import '../scss/category-section.scss';

export default function CategorySection({section, onSetSaveNewSectionName, onSetDeleteSectionFromCategory}) {
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
    transform: expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  };

  const handleExpandToggle = () => {
    setExpand(prev => !prev)
  }

  const handleDeleteSection = (id) => {

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
        {section.tickets.map(ticket => 
          <div key={ticket.id} className="ticket-row">
            <div className="icon">
              <input type="radio" />
            </div>
            <div className="name">{ticket.name}</div>
            <div className="assigned">John</div>
            <div className="priority">Low</div>
          </div>
        )}
      </div>
    </div>
  )
}