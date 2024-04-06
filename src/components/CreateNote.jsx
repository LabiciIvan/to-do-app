import React, { useState } from 'react';
import { generateID, getNotes, saveLocal, toJsonString } from './Utilities';

const CreateNote = ({updateParent}) => {

    const localKey                  = 'notes';
    const [name, setName]           = useState('');
    const [category, setCategory]   = useState('');

    const closeCreateNote = () => {
        updateParent();
    }

    const createNewNote = () => {
        if (name.length === 0 || category.length === 0) {
            closeCreateNote();
            return;
        }

        let notes = getNotes(localKey);

        let id = generateID(localKey);

        let newNote = {
            id: id,
            name: name,
            category: category
        }

        notes.push(newNote);

        saveLocal(localKey, toJsonString(notes));
        updateParent();
    }

    return (
       <div className='create-note'>
            <input type="text" placeholder='Note name' onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='Note category' onChange={(e) => setCategory(e.target.value)}/>
            <button onClick={createNewNote}>SAVE</button>
            <button onClick={closeCreateNote}>CLOSE</button>
       </div>
    )
}

export default CreateNote;