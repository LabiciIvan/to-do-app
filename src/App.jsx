import React, { useEffect, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.scss';
import './scss/app.scss';

import Nav from "./components/Nav";
import Category from "./components/Category";

export default function App() {

  const navLinks = [
    {
      id: 1,
      icon: <i className="bi bi-house-door"/>,
      content: 'Home',
    },
    {
      id: 2,
      icon: <i className="bi bi-envelope" />,
      content: 'Inbox'
    },
    {
      id: 3,
      icon: <i className="bi bi-person" />,
      content: 'Profile'
    },
  ];

  const [mainNavLinks, setMainNavLinks] = useState(navLinks);

  const [viewCategory, setViewCategory] = useState(null);

  useEffect(() => {

    if (viewCategory) {
      const selectedCategory = mainNavLinks.find(link => link.id === viewCategory.id);
      setViewCategory(() => selectedCategory);
    }
  }, [mainNavLinks]);

  const updateNavLinks = (navLinks) => {
    setMainNavLinks(() => navLinks);
  }

  const updateViewCategory = (id) => {
    if (id < 4) return;  // Main Pages will not be displayed from Category component
    const selectedCategory = mainNavLinks.find(link => link.id === id);
    setViewCategory(() => selectedCategory);
  }

  const handleStoreNewSection = (id, section) => {

    const navLinksWithNewSectionAdded = mainNavLinks.map(link => link.id === id ? {...link, sections: [...link.sections, section]} : link);

    setMainNavLinks(() => navLinksWithNewSectionAdded);
  }

  const handleStoreNewTicketToSection = (categoryID, section) => {


    const navLinksWithTicketToSectionAdded = mainNavLinks.map(category =>
      category.id === categoryID ? {...category, sections: section} : category
    );

    setMainNavLinks(() => navLinksWithTicketToSectionAdded);
  }

  const handleStoreNewSectionNameForACategory = (categoryID, sections) => {
    const navLinksUpdatedWithNewSectionNameForCategory = mainNavLinks.map(link => link.id === categoryID ? {...link, sections: sections} : link);
    setMainNavLinks(() => navLinksUpdatedWithNewSectionNameForCategory);
  }

  const handleDeleteSectionFromCategory = (categoryID, sections) => {
    const navLinksUpdatedWihoutASpecificSectionInCategory = mainNavLinks.map(link => link.id === categoryID ? {...link, sections: sections} : link);
    setMainNavLinks(() => navLinksUpdatedWihoutASpecificSectionInCategory);
  }

  const handleDeleteCategory=(id) => {
    const updatedNavLinksWithoutACategory = mainNavLinks.filter(link => link.id !== id);
    setMainNavLinks(() => updatedNavLinksWithoutACategory);
  }
  
  return (
    <div className="app">
      <Nav links={mainNavLinks} onSetUpdateLinks={updateNavLinks} onSetUpdateViewCategory={updateViewCategory}/>
      <div className="container">

        {viewCategory &&
          <Category
            category={viewCategory}
            onSetHandleStoreNewSection={handleStoreNewSection}
            onSetHandleStoreNewTicketToSection={handleStoreNewTicketToSection}
            onSetSaveNewSectionName={handleStoreNewSectionNameForACategory}
            onSetHandleDeleteSectionFromCategory={handleDeleteSectionFromCategory}
            onSetHandleDeleteCategory={handleDeleteCategory}
          />}
      </div>
    </div>
  );
}