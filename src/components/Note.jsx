import React, { useState } from 'react';
import { getNotes, saveLocal, toJsonString } from './Utilities';
import Comment from './Comment';

export default function Note({note, updateParent}) {

    const { id, name, category, comments } = note;

    const open      = 'flex';
    const close     = 'none';
    const localKey  = 'notes';

    const [display, setDisplay]             = useState(close);
    const [noteName, setNoteName]           = useState(name);
    const [noteCategory, setNoteCategory]   = useState(category);

    const detailNote = () => {
        setDisplay(open);
    }

    const closeNote = (id) => {
        setNoteName(name);
        setNoteCategory(category);
    }

    const deleteNote = (id) => {
        let notes = getNotes(localKey);

        let updatedNotes = notes.filter((item) => item.id !== id);

        saveLocal(localKey, toJsonString(updatedNotes));
        updateParent();
    }

    const updateNote = (id) => {
        if (noteName === name && noteCategory === category) {
            updateParent();
            return
        };

        let notes = getNotes(localKey);

        for (let i = 0; i < notes.length; ++i) {
            if (notes[i]['id'] === id) {
                notes[i] = {
                    ...notes[i],
                    name: noteName,
                    category: noteCategory 
                }
              }
        }

        saveLocal(localKey, toJsonString(notes));
        updateParent();
    }

    return (
        <div className='note d-flex border p-2 rounded-2 shadow-sm w-75 m-2'>
            <h4 className='display-6 d-flex w-75 ps-2'>{name}</h4>
            <div className="container d-flex w-25 justify-content-around">
                <button className='btn btn-danger' onClick={() => deleteNote(id)}>Remove</button>
                <button className='btn btn-info' onClick={detailNote} data-bs-toggle="modal" data-bs-target={`#modal-${id}`}>...</button>
            </div>

            <div className="note-details modal fade"  id={`modal-${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className='btn btn-danger' onClick={() => deleteNote(id)} data-bs-dismiss="modal" aria-label="Close">DELETE</button>
                            <button className='btn btn-primary ms-1' onClick={() => updateNote(id)} data-bs-dismiss="modal" aria-label="Close">Update</button>
                            <button className='btn btn-secondary ms-auto' onClick={() => closeNote(id)} data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>
                        <div className="modal-body">
                            <label className='m-2 form-label'>Name:</label>
                            <input className='form-control m-2' type="text" value={noteName} onChange={(e) => setNoteName(e.target.value)}/>
                            <label className='m-2 form-label'>Category:</label>
                            <input className='form-control m-2' type="text" value={noteCategory} onChange={(e) => setNoteCategory(e.target.value)}/>
                        </div>
                        <div className="modal-footer d-flex overflow-auto" style={{maxHeight: '400px'}}>
                            <Comment comm={comments} belongsID={id}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}