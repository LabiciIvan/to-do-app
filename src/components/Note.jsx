import React, { useState } from 'react';
import '../css/note.css';
import { getNotes, saveLocal, toJsonString } from './Utilities';

export default function Note({note, updateParent}) {

    const open = 'flex';
    const close = 'none';
    const localKey = 'notes';

    const { id, name, category } = note;
    const [display, setDisplay] = useState(close);
    const [noteName, setNoteName] = useState(name);
    const [noteCategory, setNoteCategory] = useState(category);

    const detailNote = (id) => {
        setDisplay(open);
    }

    const closeNote = (id) => {
        setNoteName(name);
        setNoteCategory(category);
        setDisplay(close);
    }

    const deleteNote = (id) => {
        let allNotes = getNotes(localKey);

        let newNotes = allNotes.filter((item) => item.id !== id);

        saveLocal(localKey, toJsonString(newNotes));
        updateParent();
    }

    const updateNote = (id) => {
        let tempNotes = getNotes(localKey);

        const updatedArray = tempNotes.map(note => {
            if (note.id === id) {
              return {
                ...note,
                name: noteName,
                category: noteCategory 
              };
            }
            return note;
          });

        setDisplay(close);
        saveLocal(localKey, toJsonString(updatedArray));
        updateParent();
    }

    return (
        <div className='note-hero'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => deleteNote(id)}>Remove</button>
            <button className='btn' onClick={() => detailNote(id)}>...</button>

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