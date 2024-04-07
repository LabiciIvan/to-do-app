import React, { useState } from 'react';
import { getNotes } from './components/Utilities';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App() {

    const localKey              = 'notes';
    const [notes, setNotes]     = useState(getNotes(localKey));
    const [create, setCreate]   = useState(false);

    const renderNotes = (noteObject) => {

        let copyNotes = [...noteObject].reverse();

        return copyNotes.map((note) => (
            <Note note={note} key={note.id} updateParent={renderApp}/>
        ))
    }

    const renderApp = () => {
        setNotes(getNotes(localKey))
        setCreate(false);
    }

    const renderCreateNotes = () => {
        setCreate(true);
    }

    return (
        <div className='container d-flex flex-column pt-2'>
            <div className='container d-flex m-2'>
                <button className='btn btn-primary ms-auto' onClick={renderCreateNotes}>Note <i className="bi bi-pencil ms-2"></i></button>
            </div>
            <div className='container d-flex flex-column align-items-center p-4'>
                {notes ? renderNotes(notes) : 'No notes'}
            </div>
            {create && <CreateNote updateParent={renderApp}/> }
        </div>
    )
}