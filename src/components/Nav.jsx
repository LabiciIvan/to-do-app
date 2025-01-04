import { useState } from 'react';
import '../scss/nav.scss';
import toDO from '../assets/to-do.svg';

const Nav = ({links, onSetUpdateLinks, onSetUpdateViewCategory}) => {

  const [editLinkID, setEditLinkID] = useState(null);
  const [tempLinkName, setTempLinkName] = useState(null);

  const createNewCategory = () => {

    if (links.length > 7) return;

    let newCategory = {
      icon: generateIconForCustomLinks('New...'),
      content: 'New...',
      sections: [],
    };

    // Find a new id for this resource
    let id = links.reduce((max, item) => (item.id > max ? item.id : max), 0);

    newCategory = {...newCategory, id: id + 1, content: newCategory.content}

    onSetUpdateLinks([...links, newCategory]);
  }

  const handleCategoryEditId = (id, value) => {
    setEditLinkID(() => id);
    setTempLinkName(() => value);
  }

  const handleCategoryEditName = (value) => {
    if (value.length > 20) return;
    setTempLinkName(prev => value);
  }

  const abortEditLinkName = () => {
    setEditLinkID(() => null);
    setTempLinkName(() => null);
  }

  const saveEditLinkName = () => {
    const updatedLinks = links.map(link => link.id === editLinkID ? {...link, content: tempLinkName, icon: generateIconForCustomLinks(tempLinkName)} : link);
    onSetUpdateViewCategory(editLinkID);
    setEditLinkID(() => null);
    setTempLinkName(() => null);
    onSetUpdateLinks(updatedLinks);
  }

  const generateIconForCustomLinks = (linkName) => {

    const availableColors = [
      "#FF4500", // Red-Orange
      "#FFA500", // Orange
      "#FFD700", // Gold
      "#32CD32", // Lime Green
      "#1E90FF", // Dodger Blue
      "#4B0082", // Indigo
      "#EE82EE"  // Violet
    ];

    const firstLetter = linkName.charAt(0).toUpperCase();

    const randomIndex = Math.floor(Math.random() * availableColors.length);

    return <div className='custom-icon' style={{ backgroundColor: availableColors[randomIndex]}}>{firstLetter}</div>
  }

  return (
    <nav className='nav'>
      <header>
        <img src={toDO}/>
      </header>
      <div className='body'>
        <button className='wrapper-create-nav-links' onClick={createNewCategory}>
          <i className="bi bi-plus-lg"/>
          <p className='add-more-text'>Add more</p>
        </button>
        {links.map(link => 
            link.id === editLinkID
          ?
          <div key={link.id} className={`nav-link-${link.id}`}>
            <input id="edit-link-input" value={editLinkID ? tempLinkName : link.content} onChange={(e) => handleCategoryEditName(e.target.value)} autoFocus={true}/>
            <i className="bi bi-x-lg" onClick={abortEditLinkName}/>
            <i className="bi bi-check-lg" onClick={saveEditLinkName}/>
          </div>
          :
          <button key={link.id} className={`nav-link-${link.id}`} onClick={() => onSetUpdateViewCategory(link.id)}>
          {link.icon && link.icon}
          {link.content}
          {link.id > 3 && <i className="bi bi-pencil-square" onClick={() => handleCategoryEditId(link.id, link.content)}/>}
          </button>
        )}
      </div>
    </nav>
  );
}

export default Nav;