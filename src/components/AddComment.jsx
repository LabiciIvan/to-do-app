import { useState } from "react"

export default function AddComment({parentCommentID = null, onSetAddCommentToTicket}) {

  const [content, setContent] = useState('');

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
    } else if ('cancel') {
      setContent(() => '');
    }
  }

  return (
    <>
      <textarea value={content} onChange={(e) => handleContent(e.target.value)}/>
      <button onClick={() => handleCommentStorage('save')} >Save</button>
      <button onClick={() => handleCommentStorage('cancel')} >Cancel</button>
    </>
  )
}