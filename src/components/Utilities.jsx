import {getDummyData} from '../assets/Data.jsx'

const saveLocal = (key, item) => {
    localStorage.setItem(key, item);
}

const getLocal = (key) => {
    return localStorage.getItem(key);
}

const deleteLocal = (key) => {
    localStorage.removeItem(key);
}

const toJson = (item) => {
    return JSON.parse(item);
}

const toJsonString = (item) => {
    return JSON.stringify(item);
}

const getNotes = (key) => {

    let notes = toJson(getLocal(key));

    if (!notes || notes.length === 0) {
        saveLocal(key, toJsonString(getDummyData()));
        notes = toJson(getLocal(key));
    }

    return notes;
}

const generateID = (key) => {
    let id = 0;

    let tempNotes = getNotes(key)
    
    tempNotes.forEach(note => {
        if (note.id >= id) {
            id = note.id;
        }
    });

    return (id === 0 ? id : id + 1);
}

export {
    saveLocal,
    getLocal,
    toJson,
    toJsonString,
    deleteLocal,
    getNotes,
    generateID
}