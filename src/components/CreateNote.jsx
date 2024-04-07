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
       <div className='modal d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: '#808080e3'}} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content d-flex rounded-2">
                <div className='modal-header d-flex w-100 border-0 bg-light'>
                    <button className='btn btn-secondary ms-auto' onClick={closeCreateNote}>X</button>
                </div>
                <div className='modal-body d-flex flex-column w-100 p-3 border-0 align-items-center bg-light'>
                    <input className='form-control m-2' type='text' placeholder='Note name' onChange={(e) => setName(e.target.value)}/>
                    <input className='form-control m-2' type='text' placeholder='Note category' onChange={(e) => setCategory(e.target.value)}/>
                </div>
                <div className="modal-footer">
                    <button className='btn btn-primary w-50' onClick={createNewNote}>Save <i className="bi bi-floppy-fill ms-2"></i></button>
                </div>
            </div>
        </div>
       </div>
    )
}

export default CreateNote;