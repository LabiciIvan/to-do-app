import React, { useState } from 'react';
import { getNotes, saveLocal, toJsonString } from './Utilities';

export default function Comment({comm, belongsID}) {

    const localKey                  = 'notes';
    const [comments, setComments]   = useState(comm);
    const [comment, setComment]     = useState('');

    const renderComments = () => {
        return comments.map((item) => (
            <h5 key={item.id}>{item.text}</h5>
        ))
    }

    const generateCommentID = () => {
        let id = 0;

        comments.forEach(element => {
            if (element.id >= id) {
                id = element.id;
            }
        });

        return id === 0 ? id : id + 1;
    }

    const addComment = () => {

        if (comment.length === 0) {
            return;
        }
        
        let id = generateCommentID();

        let newComment = {
            id: id,
            text: comment
        }

        let notes = getNotes(localKey);

        let updatedNotes = notes.map((note) => {
            if (note.id === belongsID) {
                note.comments.push(newComment);
            }
            return note;
        });

        saveLocal(localKey, toJsonString(updatedNotes));

        setComments(prevComments => [...prevComments, newComment]);
        setComment('');

    }
    
    return (
        <>
        <div className="add-comment">
            <textarea cols="30" rows="10" placeholder='Add comments to notes' onChange={(e) => (setComment(e.target.value))} value={comment}></textarea>
            <button onClick={() => addComment()}>Add</button>
        </div>
        <div className="comment">
            {comments ? renderComments() : 'No comments to this note.'}
        </div>
        </>
    )
}