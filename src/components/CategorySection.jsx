import {useState} from 'react';
import '../scss/category-section.scss';

export default function CategorySection({section}) {
  const [expand, setExpand] = useState(true);
  const [visible, setVisible] = useState(true);

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
    if (expand) {
      setTimeout(() => setVisible(prev => !prev), 300)
    } else {
      setVisible(() => true);
    }
  
    setExpand(prev => !prev)
  }

  return (
    <div className="category-section">
      <div className="section-name">
        <i className="bi bi-arrow-down-short" onClick={handleExpandToggle} style={iconStyle}/>
        <h3 style={sectionTextStyle}> {section.name} </h3>
      </div>
      {
        visible && 
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
      }
    </div>
  )
}