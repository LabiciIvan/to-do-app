import { useState, useEffect, useRef } from 'react';
import '../scss/view-ticket.scss';
import Comment from './Comment';
import AddComment from './AddComment';

export default function ViewTicket({viewTicket, onSetViewTicket, onSetHandleTicketEdit, profile = null}) {


  const [allowEditName, setAllowEditName] = useState(false);
  const [ticketName, setTicketName] = useState(viewTicket?.name || '');

  const [allowEditDescription, setAllowEditDescription] = useState(false);
  const [ticketDescription, setTicketDescription] = useState(viewTicket?.description || '');

  const [ticketComments, setTicketComments] = useState(viewTicket?.comments || []);

  // Temporarily stores the ticket description to avoid unnecessary re-renders during typing
  const tempTicketDescription = useRef('');

  useEffect(() => {
    setTicketName(viewTicket?.name || '');
    setTicketDescription(viewTicket?.description || '');
    setTicketComments(() => viewTicket?.comments || '');
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

  const addCommentToTicket = (comment) => {
    const ID = ticketComments.reduce((initialID, comment) => comment.id > initialID ? comment.id : initialID, 0);

    const commentUpdated = {...comment, id: ID + 1, owner: profile};

    const ticketUpdated = {...viewTicket, comments: [...viewTicket.comments, commentUpdated]}
    onSetHandleTicketEdit(ticketUpdated);
  }

  const deleteCommentFromTicket = (commentID) => {
    const commentsUpdated = ticketComments.filter(comment => comment.id !== commentID);

    const ticketUpdated = {...viewTicket, comments: commentsUpdated}

    onSetHandleTicketEdit(ticketUpdated);
  }

  const handleCommentReply = (reply, commentID) => {
    console.log('ticketComments', viewTicket)
    const ID = viewTicket.comments.replies.reduce((initialID, iteratedReply) => iteratedReply.id > initialID ? iteratedReply.id : initialID, 0);

    reply.id = ID + 1;

    // const updatedTicket = {...viewTicket, viewTicket.comments.replies: [...viewTicket.comments.replies, reply]};


    // console.log('updatedTicket', updatedTicket);
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
              <div className='comments'>
                {
                  ticketComments.length > 0 &&
                  ticketComments.map(
                    comment => <Comment key={comment.id} comment={comment} onSetDeleteCommentFromTicket={deleteCommentFromTicket} profile={profile} onSetHandleCommentReply={handleCommentReply}/>
                  )
                }
                <AddComment onSetAddCommentToTicket={addCommentToTicket} />
              </div>
            </div>
          </>
        }
      </div>
  )
}