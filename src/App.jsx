import React, { useState } from 'react';
import { getNotes } from './components/Utilities';
import Note from './components/Note';
import CreateNote from './components/CreateNote';

export default function App() {

    const localKey              = 'notes';
    const [notes, setNotes]     = useState(getNotes(localKey));
    const [create, setCreate]   = useState(false);

    const renderNotes = (noteObject) => {
        return noteObject.map((note) => (
            <Note note={note} key={note.id} updateParent={renderApp}/>
        ))
    }

    const renderApp = () => {
        setNotes(getNotes(localKey))
        setCreate(false);
    }

    const renderCreateNotes = () => {
        setCreate(<CreateNote updateParent={renderApp}/>);
    }

    return (
        <>
            <button onClick={renderCreateNotes}>Make note</button>
            {notes ? renderNotes(notes) : 'No notes'}
            {create ? create : ''}
        </>
    )
}