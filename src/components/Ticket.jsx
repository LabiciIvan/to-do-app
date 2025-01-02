import { useState } from 'react';
import Priority from './Priority';
import Check from './Check';

// All styles are in 'category-section.scss' for this component
export default function Ticket({ticket, onSetHandlePriorityChange}) {

  const [expandChildPriority, setExpandChildPriority] = useState(false);

  const handlePriorityAssignment = (priority) => {
    // Directly update the ticket
    const ticketWithPriorityChanged = {...ticket, priority: priority};

    onSetHandlePriorityChange(ticketWithPriorityChanged);
  }

  return (
    <div key={ticket.id} className="ticket-row">
      <div className="icon">
        <Check />
      </div>
      <div className="name">{ticket.name}</div>
      <div className="assigned">John</div>
      <div className='priority'>
        <div className={`type ${ticket.priority}`} onClick={() => setExpandChildPriority(prev => !prev)}>
          <i className='bi bi-flag-fill' />
          <p>{ticket.priority}</p>
        </div>
        <Priority
          isExpanded={expandChildPriority}
          onSetExpand={setExpandChildPriority}
          onSetPriorityAssignment={handlePriorityAssignment}
        />
      </div>
  </div>
  )
}