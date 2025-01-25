import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import './scss/app.scss';

import Nav from './components/Nav';
import Category from './components/Category';
import Home from './pages/Home';
import Inbox from './pages/Inbox';
import Profile from './pages/Profile';

import { testCategory, john, trevor, alice, annie, josh, denise } from './dummy-data';

export default function App() {

  const profiles = [john, alice, trevor, annie, josh, denise];

  const navLinks = [
    {
      id: 1,
      icon: <i className='bi bi-house-door'/>,
      content: 'Home',
    },
    {
      id: 2,
      icon: <i className='bi bi-envelope' />,
      content: 'Inbox',
    },
    {
      id: 3,
      icon: <i className='bi bi-person' />,
      content: 'Profile',
    },
    testCategory
  ];

  const [mainNavLinks, setMainNavLinks] = useState(navLinks);

  const [viewCategory, setViewCategory] = useState(null);

  const [viewPage, setViewPage] = useState(navLinks[0]);

  const [profile, setProfile] = useState(null);

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
    const selectedView = mainNavLinks.find(link => link.id === id);

    if (id < 4) {
      setViewPage(() => selectedView);
      setViewCategory(() => null);
      return;
    }

    setViewPage(() => null);
    setViewCategory(() => selectedView);
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

  const updateCategorySection = (categoryID, sections) => {
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

  const handleUpdateCategoryAsTicketPriorityChanged = (categoryID, category) => {
    const updatedNavLinksCategory = mainNavLinks.map(link => link.id === categoryID ? category : link);
    setMainNavLinks(() => updatedNavLinksCategory);
  }

    const moveTicketToSection = (ticketID, moveToSectionID, currentSectionID) => {

      const sectionTicketExists = viewCategory.sections.filter(section => section.id === currentSectionID)[0];

      const ticket = sectionTicketExists.tickets.filter(ticket => ticket.id == ticketID)[0];

      const updatedTicket = {...ticket, belongsTo: moveToSectionID}

      const sectionWithRemovedTicket = sectionTicketExists.tickets.filter(ticket => ticket.id !== ticketID);

      const updatedSection = {...sectionTicketExists, tickets: sectionWithRemovedTicket}

      const viewCategoryWithSectionUpdated = viewCategory.sections.map(section => section.id === updatedSection.id ? updatedSection : section);

      const viewCategoryWithTicketAddedToSecion = viewCategoryWithSectionUpdated.map(section => section.id === updatedTicket.belongsTo ? {...section, tickets: [...section.tickets, updatedTicket]} : section);

      const updatedViewCategory = {...viewCategory, sections: viewCategoryWithTicketAddedToSecion}

      const updatedNavLinksCategory = mainNavLinks.map(link => link.id === updatedViewCategory.id ? updatedViewCategory : link);

      setMainNavLinks(() => updatedNavLinksCategory);
    }

  return (
    <div className='app'>
      <Nav links={mainNavLinks} onSetUpdateLinks={updateNavLinks} onSetUpdateViewCategory={updateViewCategory} profile={profile} />
      <div className='container'>
        {
          viewCategory ?
            <Category
              category={viewCategory}
              onSetHandleStoreNewSection={handleStoreNewSection}
              onSetHandleStoreNewTicketToSection={handleStoreNewTicketToSection}
              onSetUpdateCategorySection={updateCategorySection}
              onSetHandleDeleteSectionFromCategory={handleDeleteSectionFromCategory}
              onSetHandleDeleteCategory={handleDeleteCategory}
              onSetUpdateCategoryAsTicketPriorityChanged={handleUpdateCategoryAsTicketPriorityChanged}
              profile={profile}
              users={profiles}
              onSetMoveTicketToSection={moveTicketToSection}
            />
            :
            viewPage && viewPage.content === 'Profile' ? (
              <Profile profiles={profiles} profile={profile} onSetProfile={setProfile} />
            ) : viewPage.content === 'Inbox' ? (
              <Inbox />
            ) : (
              <Home />
            )
        }
      </div>
    </div>
  );
}