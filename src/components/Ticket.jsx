import { useState } from 'react';
import Priority from './Priority';
import Check from './Check';
import ProfileIcon from './ProfileIcon';
import MoveTicket from './MoveTicket';

// All styles are in 'category-section.scss' for this component
export default function Ticket({ticket, onSetHandlePriorityChange, onSetHandleViewTicket, sections, onSetMoveTicketToSection}) {

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
      <div className="name" onClick={() => onSetHandleViewTicket(ticket)}>{ticket.name}</div>
      <MoveTicket sections={sections} ticket={ticket} onSetMoveTicketToSection={onSetMoveTicketToSection}/>
      <div className="assigned">
        {
          ticket.assignee.length === 0 ? 'none' : 
          ticket.assignee.map(user => 
            <ProfileIcon profile={user} key={user.id} enableName={false} width={40} height={40}/>
          )
        }
      </div>
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