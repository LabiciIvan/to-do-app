import { useState } from "react";

export default function Comment({comment, onSetDeleteCommentFromTicket, profile = null, onSetHandleCommentReply}) {

  const [reply, setReply] = useState(false);
  const [content, setContent] = useState('');

  const handleActionOnInput = (action = null) => {
    setReply(prev => !prev);

    if (action === 'post') {
      const event = new Date();
      const replyTimestamp = event.toLocaleString();
      // Handle post reply
      const commentReply = {
        id: null,
        content,
        timestamp: replyTimestamp,
        postedBy: profile
      }
      onSetHandleCommentReply(commentReply, comment.id);
      return;
    }

    setContent(() => '');
  }
  return (
    <div>
      <p>{comment.timestamp}</p>
      <p>{comment.content}</p>
      <div className='additionals'>
        <div className='actions'>
          { profile !== null && <small onClick={() => setReply(prev => !prev)}>reply</small>}
        </div>
        <div className='abilities'>
          {
            (reply && profile !== null) && 
            <div className='reply'>
              <input type="text" value={content} onChange={(e) => setContent(() => e.target.value)}/>
              <button onClick={() => handleActionOnInput('post')}>Post</button>
              <button onClick={() => handleActionOnInput()}>Cancel</button>
            </div>
          }
        </div>
      </div>
      {(comment.owner?.name === profile?.name || comment.owner === null) && <button onClick={() => onSetDeleteCommentFromTicket(comment.id)}>Delete comment</button>}
    </div>
  )
}