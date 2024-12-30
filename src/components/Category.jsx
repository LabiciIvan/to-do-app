
import '../scss/category.scss';
import CategoryControl from './CategoryControl';
import CategorySection from './CategorySection';

const Category = ({category, onSetHandleStoreNewSection, onSetHandleStoreNewTicketToSection}) => {


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

  const handleCreateNewTicket = (sectionID, ticketName) => {

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
      priotity: 'low'
    }

    const sectionsUpdated = sections.map(section =>
      section.id === sectionID ? {...section, tickets: [...section.tickets, ticket] } : section
    )

    onSetHandleStoreNewTicketToSection(id, sectionsUpdated);
  }

  const handleDeleteCategory = (id) => {
    console.log('delete: ', id);
  }

  return (
    <div className='category' key={category.id} >
      <CategoryControl key={category.id} id={id} onSetCreateNewSection={handleCreateNewSection} sections={sections} onSetCreateNewTicket={handleCreateNewTicket}/>
      <div className='header'>
        <div className='title'>
          <h3>{category.content}</h3>
        </div>
        <div className='control'>
          <div className='delete' onClick={() => handleDeleteCategory(category.id)}>
            <i className='bi bi-trash-fill' />
          </div>
        </div>
      </div>
      {sections.map(section => <CategorySection key={section.id} section={section}/>)}
    </div>
  );
}

export default Category;