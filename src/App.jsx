import React, { useEffect, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.scss';
import './scss/app.scss';
import { testCategory } from "./dummy-data";

import Nav from "./components/Nav";
import Category from "./components/Category";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Profile from "./pages/Profile";

export default function App() {

  const profiles = [
    {
      id: 0,
      name: 'John'
    },
    {
      id: 1,
      name: 'Alice'
    },
    {
      id: 2,
      name: 'Trevor'
    },
  ];

  const navLinks = [
    {
      id: 1,
      icon: <i className="bi bi-house-door"/>,
      content: 'Home',
    },
    {
      id: 2,
      icon: <i className="bi bi-envelope" />,
      content: 'Inbox',
    },
    {
      id: 3,
      icon: <i className="bi bi-person" />,
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

  /**
   * Ticket priority is updated in the following way:
   *
   * 1. **App Component**:
   *    - Passes the `handleUpdateCategoryAsTicketPriorityChanged` method to the `Category` component.
   *    - Updates the `mainNavLinks` category based on the provided ID and updated category.
   * 
   * 2. **Category Component**:
   *    - Receives `handleUpdateCategoryAsTicketPriorityChanged` as a prop and assigns it to `onSetUpdateCategoryAsTicketPriorityChanged`.
   *    - Internally calls `handleUpdateCategorySectionWithNewSection` to update `category.sections` for the specific section containing the ticket.
   * 
   * 3. **CategorySection Component**:
   *    - Receives `handleUpdateCategorySectionWithNewSection` as a prop and assigns it to `onSetSaveNewSectionToCategory`.
   *    - Internally calls `handlePriorityChangeOnTicket` to update `section.tickets` by modifying the ticket with the updated priority.
   * 
   * 4. **Ticket Component**:
   *    - Receives `handlePriorityChangeOnTicket` as a prop and assigns it to `onSetHandlePriorityChange`.
   *    - Internally calls `handlePriorityAssignment` to update the ticket's priority.
   *    - Interacts with the `Priority` component via the `onSetPriorityAssignment` method to finalize the priority assignment.
   *
   * App
   * |-- Passes: handleUpdateCategoryAsTicketPriorityChanged
   * |
   * |-- Category
   *        |-- Receives: handleUpdateCategoryAsTicketPriorityChanged (as onSetUpdateCategoryAsTicketPriorityChanged)
   *        |-- Calls: handleUpdateCategorySectionWithNewSection
   *        |
   *        |-- CategorySection
   *               |-- Receives: handleUpdateCategorySectionWithNewSection (as onSetSaveNewSectionToCategory)
   *               |-- Calls: handlePriorityChangeOnTicket
   *               |
   *               |-- Ticket
   *                      |-- Receives: handlePriorityChangeOnTicket (as onSetHandlePriorityChange)
   *                      |-- Calls: handlePriorityAssignment
   *                      |-- Uses: Priority component (via onSetPriorityAssignment)
   */
  const handleUpdateCategoryAsTicketPriorityChanged = (categoryID, category) => {
    const updatedNavLinksCategory = mainNavLinks.map(link => link.id === categoryID ? category : link);
    setMainNavLinks(() => updatedNavLinksCategory);
  }

  return (
    <div className="app">
      <Nav links={mainNavLinks} onSetUpdateLinks={updateNavLinks} onSetUpdateViewCategory={updateViewCategory} profile={profile} />
      <div className="container">
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