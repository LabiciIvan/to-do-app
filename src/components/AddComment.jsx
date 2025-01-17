import { useState } from "react"
import '../scss/add-comment.scss';

export default function AddComment({parentCommentID = null, onSetAddCommentToTicket}) {

  const [content, setContent] = useState('');

  const [enableButtons, setEnableButtons] = useState(false);
  const [triggerOnce, setTriggerOnce] = useState(true);

  const handleContent = (value) => {
    setContent(() => value);
  }

  const handleCommentStorage = (action) => {

    const event = new Date();
    const commentTimestamp = event.toLocaleString();

    if (action === 'save' && content.length > 0) {
      let commentObj = {
        id: null,
        ticketID: null,
        parentCommentID,
        timestamp: commentTimestamp,
        content: content,
        replies: []
      }

      onSetAddCommentToTicket(commentObj);
      setContent(() => '');
      setTriggerOnce(() => true);
      setEnableButtons(prev => false);
    }
  }

  const handleEnableButtons = (triggerPoint) => {
    if (triggerPoint === 'textarea' && triggerOnce === true) {
      setTriggerOnce(prev => !prev)
      setEnableButtons(prev => true);
    } else if (triggerPoint === 'cancel-button') {
      setContent(() => '');
      setTriggerOnce(() => true);
      setEnableButtons(prev => false);
    }
  }

  return (
    <div className='component-add-comment'>
      <div className='component-label' onClick={() => handleEnableButtons('textarea')}>
        <i className='bi bi-chat-left' />
        <p>Add comment</p>
      </div>

      <textarea className='add-comment-textarea' value={content} onChange={(e) => handleContent(e.target.value)} onClick={() => handleEnableButtons('textarea')} />
        <div className='comments-control'>
          {
            enableButtons &&
            <>
              <div className='post-button' onClick={() => handleCommentStorage('save')}>
                <i className='bi bi-send-fill' />
                <small>post</small>
              </div>
              <div className='cancel-button' onClick={() =>handleEnableButtons('cancel-button')}>
                <i className='bi bi-x-square-fill' />
                <small>cancel</small>
              </div>
            </>
          }
        </div>

    </div>
  )
}