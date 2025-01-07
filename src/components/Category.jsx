
import { useState } from 'react';

import '../scss/category.scss';
import CategoryControl from './CategoryControl';
import CategorySection from './CategorySection';
import ViewTicket from './ViewTicket';

const Category = ({category, onSetHandleStoreNewSection, onSetHandleStoreNewTicketToSection, onSetUpdateCategorySection, onSetHandleDeleteSectionFromCategory, onSetHandleDeleteCategory, onSetUpdateCategoryAsTicketPriorityChanged}) => {

  const [viewTicket, setViewTicket] = useState(false);

  const {id, icon, content, sections} = category;

  const handleCreateNewSection = (categoryId, name, color) => {

    if (name.length === 0) return;

    const ID = sections.reduce((max, section) => (section.id > max ? section.id : max + 1), 0);

    const section = {
      id: ID,
      name: name,
      color: color,
      tickets: []
    };

    onSetHandleStoreNewSection(categoryId, section);
  }

  const handleCreateNewTicket = (sectionID, ticketName, ticketPriority) => {

    let ID = 0

    // Create the ID for the specific section
    sections.forEach(section => {
      if (section.id === sectionID) {
        ID = section.tickets.reduce((max, ticket) => (ticket.id > max ? ticket.id : max + 1), 0)
      }
    });

    const ticket = {
      id: ID,
      belongsTo: sectionID,
      name: ticketName,
      priority: ticketPriority,
      description: '',
      comments: [],
      assignee: [],
    }

    const sectionsUpdated = sections.map(section =>
      section.id === sectionID ? {...section, tickets: [...section.tickets, ticket] } : section
    )

    onSetHandleStoreNewTicketToSection(id, sectionsUpdated);
  }

  const changeSectionNameAndColor = (name, color, sectionID) => {
    const updatedSectionsWithNewName = sections.map(section => section.id === sectionID ? {...section, name: name, color: color} : section)
    onSetUpdateCategorySection(id, updatedSectionsWithNewName);
  }

  const handleDeleteSectionFromCategory = (sectionID) => {
    const updatedSectionWithoutASection = sections.filter(section => section.id !== sectionID);
    onSetHandleDeleteSectionFromCategory(id, updatedSectionWithoutASection);
  }

  const handleUpdateCategorySectionWithNewSection = (sectionID, updatedSection) => {
    // updatedSections handled in CategorySection component
    // Only pass it further to reach the App.jsx component
    const updatedCategorySections = category.sections.map(section => section.id === sectionID ? updatedSection : section);

    const updatedCategory = {...category, sections: updatedCategorySections};

    onSetUpdateCategoryAsTicketPriorityChanged(id, updatedCategory);
  }

  const handleViewTicket = (ticket) => {
    setViewTicket(() => ticket);
  }

  const handleTicketEdit = (ticket) => {
    const sectionWhereTicketBelongs = category.sections.filter(section => section.id === ticket.belongsTo);

    const ticketsUpdated = sectionWhereTicketBelongs[0].tickets.map(iteratedTickets => iteratedTickets.id === ticket.id ? ticket : iteratedTickets);

    sectionWhereTicketBelongs[0].tickets = ticketsUpdated;

    const sectionsUpdated = category.sections.map(section => section.id === ticket.belongsTo ? sectionWhereTicketBelongs[0] : section);

    onSetUpdateCategorySection(category.id, sectionsUpdated);
  }

  return (
    <div className='category' key={category.id} >
      <CategoryControl key={category.id} id={id} onSetCreateNewSection={handleCreateNewSection} sections={sections} onSetCreateNewTicket={handleCreateNewTicket}/>
      <div className='header'>
        <div className='title'>
          <h3>{category.content}</h3>
        </div>
        <div className='control'>
          <div className='delete' onClick={() => onSetHandleDeleteCategory(category.id)}>
            <i className='bi bi-trash-fill' />
          </div>
        </div>
      </div>
      <ViewTicket viewTicket={viewTicket} onSetViewTicket={setViewTicket} onSetHandleTicketEdit={handleTicketEdit}/>
      {sections.map(section =>
        <CategorySection
          key={section.id}
          section={section}
          onSetChangeSectionNameAndColor={changeSectionNameAndColor}
          onSetDeleteSectionFromCategory={handleDeleteSectionFromCategory}
          onSetSaveNewSectionToCategory={handleUpdateCategorySectionWithNewSection}
          onSetHandleViewTicket={handleViewTicket}
        />
      )}
    </div>
  );
}

export default Category;