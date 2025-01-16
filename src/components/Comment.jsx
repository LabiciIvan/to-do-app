import { useState } from "react";
import '../scss/comment.scss';

export default function Comment({comment, onSetDeleteCommentFromTicket, profile = null, onSetHandleCommentReply, onSetHandleCommentReplyEditUpdate}) {

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
      setContent(() => '');
      onSetHandleCommentReply(commentReply, comment.id);
      return;
    }

    setContent(() => '');
  }

  const deleteCommentReply = (id) => {
    const repliesUpdated = comment.replies.filter(comm => comm.id !== id);

    const updatedComment = {...comment, replies: repliesUpdated};

    onSetHandleCommentReplyEditUpdate(updatedComment);
  }

  return (
    <div className='comment'>
      <div className='header'>
        <p className='timestamp'><i className='bi bi-clock-fill' />{comment.timestamp}</p>
        <p className='posted-by'>{comment.owner?.name && `- ${comment.owner?.name}`}</p>
        {(comment.owner?.id === profile?.id || comment.owner === null) &&
          <div className='delete' onClick={() => onSetDeleteCommentFromTicket(comment.id)}>
             <i className='bi bi-trash-fill' />
          </div>
        }
      </div>
      <p className='comment-content'>{comment.content}</p>
      <div className='additionals'>
        <div className='actions'>
          { profile !== null &&
            <div className='reply-action' onClick={() => setReply(prev => !prev)}>
              <i className='bi bi-chat-left-fill' />
            </div>
          }
        </div>
        <div className='abilities'>
          {
            (reply && profile !== null) && 
            <div className='reply'>
              <input type='text' value={content} onChange={(e) => setContent(() => e.target.value)} placeholder='Write your reply...'/>
              <div className='reply-controls'>
                <div className='post-reply' onClick={() => handleActionOnInput('post')}>
                  <i className='bi bi-send-fill' />
                  <small >Post</small>
                </div>
                <div className='cancel-reply' onClick={() => handleActionOnInput()}>
                  <i className='bi bi-x-square-fill' />
                  <small>Cancel</small>
                </div>
              </div> 
            </div>
          }
        </div>
      </div>
      <div className='replies'>
        {
          comment.replies.length > 0 &&
          comment.replies.slice().reverse().map(reply =>
            <div className='reply' key={reply.id}>
              <div className='header'>
                <p className='timestamp'><i className='bi bi-clock-fill' />{reply.timestamp}</p>
                <p className='posted-by'>{reply.postedBy?.name && `- ${reply.postedBy?.name}`}</p>
                { !profile || reply.postedBy?.id === profile.id &&
                  <div className='delete' onClick={() => deleteCommentReply(reply.id)}>
                    <i className='bi bi-trash-fill' />
                  </div>
                }
              </div>
              <p className='comment-content'>{reply.content}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}