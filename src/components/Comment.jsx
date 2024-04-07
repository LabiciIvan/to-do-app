import React, { useState } from 'react';
import { getNotes, saveLocal, toJsonString } from './Utilities';

export default function Comment({comm, belongsID}) {

    const localKey                  = 'notes';
    const [comments, setComments]   = useState(comm);
    const [comment, setComment]     = useState('');

    const renderComments = () => {
        return comments.map((item) => (
            <div key={item.id}>
                <h5 >{item.text}</h5>
                <button onClick={() => deleteComment(item.id)}>Delete comment</button>
            </div>
        ))
    }

    const generateCommentID = () => {
        let id = 0;

        if (comments) {
            comments.forEach(element => {
                if (element.id >= id) {
                    id = element.id;
                }
            });
        }

        return !comments ? id : id + 1;
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
                if (!note.comments) {
                    note.comments = [];
                }

                note.comments.push(newComment);
            }
            return note;
        });

        saveLocal(localKey, toJsonString(updatedNotes));

        setComments(prevComments => [...prevComments, newComment]);
        setComment('');
    }

    const deleteComment = (id) => {
        let updateComments = comments.filter((item) =>  item.id !== id);

        let notes = getNotes(localKey);

        notes.forEach(element => {
            if (element.id === belongsID) {
                element.comments = updateComments;
            }
        });

        saveLocal(localKey, toJsonString(notes));
        setComments(updateComments);

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