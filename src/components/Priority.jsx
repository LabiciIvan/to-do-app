import { useState } from 'react';
// If onSetExpand callback is provided will use it to expand or not the priorities
// if onSetPriorityAssignment is provided will use it to pass further the chosen priority
export default function Priority({isExpanded, onSetExpand = null, onSetPriorityAssignment = null, addBorders = false}) {

  const [selectedPriority, setSelectedPriority] = useState(null);

  const handlePriorityAssignment = (type) => {
    if (addBorders) {
      // Add borders to icons only if this option is selected
      setSelectedPriority(prev => (type === selectedPriority ? null : type));
    }

    if (onSetExpand) {
      onSetExpand(prev => !prev);
    }

    if (onSetPriorityAssignment) {
      onSetPriorityAssignment(type);
    }
  }

  // Priorities which can be assigned
  const priorities = ['low', 'high', 'urgent'];

  const defaultColors = {
    low:    '#FFD700',
    high:   '#1E90FF',
    urgent: '#FF4500',
  }

  return (
    <div className={`control ${isExpanded && 'expanded'}`}>
      {priorities.map(type =>
        <div key={type} className={`type ${type}`} style={{ color: defaultColors[type], border: selectedPriority === type ? '1px solid black' : 'none', borderRadius: '5px', padding: '2px'}}>
          <i className='bi bi-flag-fill' onClick={() => handlePriorityAssignment(type)}/>
        </div>
      )}
  </div>
  )
}