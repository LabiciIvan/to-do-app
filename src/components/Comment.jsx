import React, { useState } from 'react';
import { getNotes, saveLocal, toJsonString } from './Utilities';

export default function Comment({comm, belongsID}) {

    const localKey                  = 'notes';
    const [comments, setComments]   = useState(comm);
    const [comment, setComment]     = useState('');

    const renderComments = () => {

        let copyComments = [...comments].reverse();

        return copyComments.map((item) => (
            <div className='container bg-light m-2 rounded-2 p-2 d-flex flex-column justify-content-center' key={item.id}>
                <p className='small text-end border-bottom p-1 text-secondary'>{item.time} <i className="bi bi-calendar3 ms-2"></i></p>
                <p className='lead w-100'>{item.text}</p>
                <button className='btn btn-danger ms-auto' onClick={() => deleteComment(item.id)}><i className="bi bi-trash3-fill"></i></button>
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

        let dateInstance = new Date();

        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];

        const month = months[dateInstance.getMonth()];
        const day = dateInstance.getDate();
        const year = dateInstance.getFullYear();
        const hours = dateInstance.getHours().toString().padStart(2, '0');
        const minutes = dateInstance.getMinutes().toString().padStart(2, '0');
        const seconds = dateInstance.getSeconds().toString().padStart(2, '0');
        
        let newComment = {
            id: id,
            text: comment,
            time: `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`
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

        setComments(comments ? [...comments, newComment] : [newComment]);
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
        <div className='container d-flex flex-column'>
            <textarea className='form-control m-2' placeholder='Add comments to notes' onChange={(e) => (setComment(e.target.value))} value={comment}></textarea>
            <button className='btn btn-primary ms-auto' onClick={() => addComment()}>Post <i className="bi bi-file-earmark-text"></i></button>
        </div>
            {comments ? renderComments() : <div className='container'><p className='blockquote-footer'>No comments to this note.</p></div>}
        </>
    )
}