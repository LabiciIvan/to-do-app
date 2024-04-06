import React, { useState } from 'react';
import '../css/note.css';
import { getNotes, saveLocal, toJsonString } from './Utilities';

export default function Note({note, updateParent}) {

    const { id, name, category } = note;

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
        setDisplay(close);
    }

    const deleteNote = (id) => {
        let notes = getNotes(localKey);

        let updatedNotes = notes.filter((item) => item.id !== id);

        saveLocal(localKey, toJsonString(updatedNotes));
        updateParent();
    }

    const updateNote = (id) => {
        let notes = getNotes(localKey);

        const updatedNotes = notes.map(item => {
            if (item.id === id) {
              return {
                ...item,
                name: noteName,
                category: noteCategory 
              };
            }
            return note;
          });

        setDisplay(close);
        saveLocal(localKey, toJsonString(updatedNotes));
        updateParent();
    }

    return (
        <div className='note-hero'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => deleteNote(id)}>Remove</button>
            <button className='btn' onClick={detailNote}>...</button>

            <div className="note-details" style={{display: display}}>
                <button onClick={() => closeNote(id)}>X</button>
                <input type="text" value={noteName} onChange={(e) => setNoteName(e.target.value)}/>
                <input type="text" value={noteCategory} onChange={(e) => setNoteCategory(e.target.value)}/>
                <button onClick={() => deleteNote(id)}>DELETE</button>
                <button onClick={() => updateNote(id)}>Update</button>
            </div>
        </div>
    )
}