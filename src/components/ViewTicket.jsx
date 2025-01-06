import { useState, useEffect, useRef } from 'react';
import '../scss/view-ticket.scss';

export default function ViewTicket({viewTicket, onSetViewTicket, onSetHandleTicketEdit}) {

  const [allowEditName, setAllowEditName] = useState(false);
  const [ticketName, setTicketName] = useState(viewTicket?.name || '');

  const [allowEditDescription, setAllowEditDescription] = useState(false);
  const [ticketDescription, setTicketDescription] = useState(viewTicket?.description || '');

  // Temporarily stores the ticket description to avoid unnecessary re-renders during typing
  const tempTicketDescription = useRef('');

  useEffect(() => {
    setTicketName(viewTicket?.name || '');
    setTicketDescription(viewTicket?.description || '');
  }, [viewTicket]);

  const handleAllowEditTicketName = () => {
    setAllowEditName(prev => !prev);
  }

  const handleEditTicketName = (value = '', type) => {
    if (type === 'editing') {
      setTicketName(() => value);
    } else if (type === 'saveOrCancelEdit') {
      if (value === 'Enter') {
        setAllowEditName(prev => !prev);
        setTicketName(() => ticketName);
        const editedTicket = {...viewTicket, name: ticketName};

        onSetHandleTicketEdit(editedTicket);

        // Handle save new ticket name
      } else if (value === 'Escape') {
        setAllowEditName(prev => !prev);
        setTicketName(() => viewTicket.name)
      }
    }
  }

  const handleDescriptionTyping = (value) => {
    tempTicketDescription.current = value;
  }

  const handleTicketDescription = () => {
    setAllowEditDescription(prev => !prev);
    setTicketDescription(() => tempTicketDescription.current);

    const updatedTicket = {...viewTicket, description: tempTicketDescription.current};
    onSetHandleTicketEdit(updatedTicket);
  }

  const renderTicketDescription = () => {
    return ticketDescription.split('\n').map((line, index) => 
      <span key={index}>
        {line}
        <br />
      </span>
    );
  }

  return (
      <div className={`view-ticket-overlay ${viewTicket ? `expand` : ''}`}>

        <div className='close-icon'>
          <i className='bi bi-x-lg' onClick={() => onSetViewTicket(() => false)}/>
        </div>
        {
          viewTicket &&
          <>
            <div className='ticket-name'>
              {allowEditName ?
                <input
                  maxLength={70}
                  autoFocus={true}
                  onChange={(e) => handleEditTicketName(e.target.value, 'editing')}
                  value={ticketName}
                  onKeyDown={(e) => handleEditTicketName(e.key, 'saveOrCancelEdit')}
                /> :
                <h4 onClick={handleAllowEditTicketName}>{ticketName}</h4>
              }
            </div>
            <div className='ticket-description'>
              {
                allowEditDescription ?
                <div className='textarea' contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => handleDescriptionTyping(e.target.innerText)} >
                  {ticketDescription}
                </div> :
                <div className='descriptions'>
                  {ticketDescription.length === 0 ? <small>Add your description here...</small> : renderTicketDescription()}
                </div>
              }
              <div className='controls'>
                {allowEditDescription ?
                  <>
                    <i className='bi bi-x-lg' onClick={() => setAllowEditDescription(() => false)}/>
                    <i className='bi bi-check-lg' onClick={() => handleTicketDescription()}/>
                  </> :
                  <i className='bi bi-pencil-square' onClick={() => setAllowEditDescription(() => true)}/>
                }
              </div>
            </div>
          </>
        }
      </div>
  )
}