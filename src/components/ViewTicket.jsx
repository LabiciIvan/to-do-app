import { useState, useEffect, useRef } from 'react';
import '../scss/view-ticket.scss';
import Comment from './Comment';
import AddComment from './AddComment';
import MoveTicket from './MoveTicket';

export default function ViewTicket({viewTicket, onSetViewTicket, onSetHandleTicketEdit, profile = null, users, sections, onSetMoveTicketToSection}) {

  const [allowEditName, setAllowEditName] = useState(false);
  const [ticketName, setTicketName] = useState(viewTicket?.name || '');

  const [allowEditDescription, setAllowEditDescription] = useState(false);
  const [ticketDescription, setTicketDescription] = useState(viewTicket?.description || '');

  const [ticketComments, setTicketComments] = useState(viewTicket?.comments || []);

  const [expanded, setExpand] = useState(false);

  const [expandCommentsList, setExpandCommentsList] = useState(false);

  // State for user results
  const [expandResults, setExpandDropDown] = useState(false);
  const [assignableUsers, setAssignableUsers] = useState([]);
  const [temporarySaveAssignableUsers, setTemporarySaveAssignableUsers] = useState([]);

  const ticketNameRef = useRef();

  // Temporarily store the ticket name to avoid unnecessary re-renders during name edit
  const tempTicketName = useRef('');

  // Temporarily stores the ticket description to avoid unnecessary re-renders during typing
  const tempTicketDescription = useRef('');

  useEffect(() => {
    setTicketName(viewTicket?.name || '');
    setTicketDescription(viewTicket?.description || '');
    setTicketComments(() => viewTicket?.comments || '');
  }, [viewTicket]);

  useEffect(() => {
    if (ticketNameRef.current && !allowEditName) {
      ticketNameRef.current.innerText = ticketName;
    }
  }, [ticketName, allowEditName]);

  const handleAllowEditTicketName = () => {
    setAllowEditName(prev => !prev);
  }

  const handleEditTicketName = (value = '') => {
    setAllowEditName(prev => !prev);

    if (value === 'Save') {
      setTicketName(() => tempTicketName.current);
    
      const editedTicket = {...viewTicket, name: tempTicketName.current};

      onSetHandleTicketEdit(editedTicket);
    } else if (value === 'Abort') {
      tempTicketName.current = '';
    }
  }

  const handleNameTyping = (value) => {
    if (value.length > 65) {
      ticketNameRef.current.innerText =tempTicketName.current;
      return;
    }

    tempTicketName.current = (value);
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
    const interestedComment = ticketComments.filter(comment => comment.id === commentID);

    // Find the highest ID and sum with 1
    const ID = interestedComment[0].replies.reduce((initialID, reply) => reply.id > initialID ? reply.id : initialID, 0);

    // Add the generated ID based on the replies ID
    reply.id = ID + 1;

    const updatedCommentWithReplies = ticketComments.map(comment => comment.id === commentID ? {...comment, replies: [...comment.replies, reply]} : comment);

    const updatedTicket = {...viewTicket, comments: updatedCommentWithReplies}

    onSetHandleTicketEdit(updatedTicket);
  }

  const handleCommentReplyEditUpdate = (comment) => {
    const commentsUpdated = viewTicket.comments.map(comm => comm.id === comment.id ? comment : comm);

    const updatedTicket = {...viewTicket, comments: commentsUpdated}

    onSetHandleTicketEdit(updatedTicket);
  }

  const expandSection = (action) => {
    if (action === 'expand') { 
      recalculateAssignedAndAvailableUsers();
    } else if (action === 'collapse') {
      // Collapse button to hide the search bar
      setExpand(() => false);
      setExpandDropDown(() => false);
      setAssignableUsers(() => []);

    } else if (action === 'click-search-bar') {
      // Search bar is clicked and we display the drop down results
      setExpandDropDown(() => true);

    } else if (action === 'Escape') {
      // Escape key presses and we close the drop down results
      setExpandDropDown(() => false);

    } else if (action === 'close-view-ticket') {
      // Button to close Ticket view triggered and we must reset everything to initial state 
      onSetViewTicket(() => false);
      setAssignableUsers(() => []);
      setExpand(() => false);
      setExpandDropDown(() => false);
      setExpandCommentsList(() => false);
      setAllowEditName(() => false);
    }
  }

  const recalculateAssignedAndAvailableUsers = () => {
    // Expand the section and prepare the list of users with the assigned ones and not assigned yet
    let usersReadyToAssign = [...users];

    usersReadyToAssign.forEach(user => {
      // Assume user is not assigned
      user.checked = false;

      viewTicket.assignee.forEach(assignedUser => {
        if (user.id === assignedUser.id) {
          // Set user as assigned only if there's a match
          user.checked = true;
        }
      });
    });

    setAssignableUsers(() => usersReadyToAssign)
    setExpand(() => true);
    setTemporarySaveAssignableUsers(() => usersReadyToAssign);
  }

  const searchUsersReadyToAssign = (value) => {

    if (value === '' || value === 'Backspace') {
      recalculateAssignedAndAvailableUsers();
      return;
    }

    const regex = new RegExp(`^${value}`, "i");
  
    const results = assignableUsers.filter(user => regex.test(user.name));
    setAssignableUsers(() => results);
  }

  const handleAssignmentAndRemovalFromTicket = (check, user) => {
    // Maximum allowed users on one ticket
    const maxUsersToTicketAssign = 3;

    if (viewTicket.assignee.length > maxUsersToTicketAssign && !check) return;

    const usersList = assignableUsers.map(individual => user.id === individual.id ? {...individual, checked: !check} : individual);

    setAssignableUsers(() => usersList);

    // Represent the ticket with assigned users field updated
    let ticketUpdated = null;

    if (!check) {
      // Assign user to ticket
      if (viewTicket.assignee.length > maxUsersToTicketAssign) return;
  
      ticketUpdated = {...viewTicket, assignee: [...viewTicket.assignee, user]};

    } else {
      // Unassign user from ticket assignment
      const assignedUsers = viewTicket.assignee.filter(assignee => assignee.id !== user.id);

      ticketUpdated = {...viewTicket, assignee: assignedUsers};
    }

    // Update the ticket state
    onSetHandleTicketEdit(ticketUpdated);
  }

  return (
      <div className={`view-ticket-overlay ${viewTicket ? `expand` : ''}`}>

        <div className='close-icon'>
          <i className='bi bi-x-lg' onClick={() => expandSection('close-view-ticket')}/>
        </div>
        {viewTicket &&
          <>
            <div className='title-wrapper'>
              <div className='ticket-name-section'>
                <div className={`ticket-name ${allowEditName ? 'edit' : ''}`} contentEditable={allowEditName} onInput={(e) => handleNameTyping(e.target.innerText)} suppressContentEditableWarning={true} ref={ticketNameRef}>
                  {ticketName}
                </div>
                <div className='name-actions'>
                  { allowEditName ?
                    <>
                      <i className='bi bi-x-lg' onClick={() => handleEditTicketName('Abort')} />
                      <i className='bi bi-check-lg' onClick={() => handleEditTicketName('Save')} />
                    </> :
                      <i className='bi bi-pencil-square' onClick={handleAllowEditTicketName} />
                  }
                </div>
              </div>
              <MoveTicket sections={sections} ticket={viewTicket} onSetMoveTicketToSection={onSetMoveTicketToSection}/>
            </div>

            <div className='ticket-description'>
              <div className='description-wrapper'>
                <div className='description-label'>
                  {allowEditDescription ?
                    <div className='action-on-edit'>
                      <i className='bi bi-x-lg' onClick={() => setAllowEditDescription(() => false)}/>
                      <i className='bi bi-check-lg' onClick={() => handleTicketDescription()}/>
                    </div> :
                    <div className='edit-description' onClick={() => setAllowEditDescription(() => true)}>
                      <i className='bi bi-pencil-square' />
                      <p>Edit</p>
                    </div>
                  }
                </div>
                {
                  allowEditDescription ?
                  <div className='textarea' contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => handleDescriptionTyping(e.target.innerText)} >
                    {ticketDescription}
                  </div> :
                  <div className='descriptions'>
                    {ticketDescription.length === 0 ? <small>Add your description here...</small> : renderTicketDescription()}
                  </div>
                }
              </div>
              <div className='controls' />
              <div className={`ticket-assignment ${expanded && 'expanded'} ${viewTicket.assignee.length > 0 && 'keep-expanded'}`}>
                  <div className='section-title'>
                    { !expanded &&
                      <div className='trigger-user-assignment-section' onClick={() => expandSection('expand')}>
                        <i className='bi bi-person-add' />
                        <p>Assign users...</p>
                      </div>
                    }
                  </div>
                  <div className={`assigned-section ${expanded ? 'expanded' : ''}`} >
                    {
                      viewTicket.assignee.map(user =>
                        <div
                          key={user.id}
                          className={`individual-user ${expanded ? 'expanded' : ''}`}
                          onClick={() => expandSection('expand')}
                        >
                          <i
                            className='bi bi-trash-fill'
                            onClick={(() => handleAssignmentAndRemovalFromTicket(true, user))}
                          />
                          <img
                            className={`assigned-user ${expanded ? 'expanded' : ''}`}
                            alt='Assigned user'
                            src={user.image}
                          />
                        </div>)
                    }
                  </div>
                  <div className={`to-assign ${expanded ? 'expanded' : ''} ${viewTicket.assignee.length === 0 ? 'take-all-space' : ''}`}>
                    <div className='wrapper-search-and-results'>
                      <input
                        type='text'
                        placeholder='Search to assign/remove'
                        onChange={(e) => searchUsersReadyToAssign(e.target.value)}
                        onClick={() => expandSection('click-search-bar')}
                        onKeyDown={(e) => expandSection(e.key)}
                      />
                      <div className={`search-results ${expandResults ? 'expand-results' : ''}`}>
                        {
                          (assignableUsers.length > 0) && assignableUsers.map(user =>
                            <div className='found-user' key={user.id}>
                              <img className='image' src={user.image} />
                              <small className='name'>{user.name}</small>
                              <input
                                className='assign-input'
                                type='checkbox'
                                checked={user.checked}
                                value={user.checked}
                                onChange={() => handleAssignmentAndRemovalFromTicket(user.checked, user)}
                              />
                            </div>
                          )
                        }
                      </div>
                    </div>
                    <i className='bi bi-arrow-left-square-fill' onClick={() => expandSection('collapse')}/>
                  </div>
                </div>
                <div className='comments'>
                  <AddComment onSetAddCommentToTicket={addCommentToTicket} />
                  <div className={`comments-wrapper ${expandCommentsList ? 'expand' : (ticketComments.length < 3 ? 'expand' : '')}`}>
                    {
                      ticketComments.length > 0 &&
                      ticketComments.slice().reverse().map(
                        comment => 
                        <Comment
                          key={comment.id}
                          comment={comment}
                          onSetDeleteCommentFromTicket={deleteCommentFromTicket}
                          profile={profile}
                          onSetHandleCommentReply={handleCommentReply}
                          onSetHandleCommentReplyEditUpdate={handleCommentReplyEditUpdate}
                        />
                      )
                    }
                  </div>
                  { !expandCommentsList && ticketComments.length > 2 &&
                    <div className='wrapper-label' onClick={() => setExpandCommentsList(() => true)}>
                      <i className='bi bi-three-dots' />
                    </div>
                  }
              </div>
            </div>
          </>
        }
      </div>
  )
}