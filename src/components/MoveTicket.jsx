import '../scss/move-ticket.scss';

export default function MoveTicket({sections, ticket, onSetMoveTicketToSection}) {

  const sectionTicketBelongs = sections.filter(section => section.id === ticket.belongsTo)[0];

  const sectionsTicketDoesntBelong = sections.filter(section => section.id !== ticket.belongsTo);

  const beforeMoveTicketToAnotherSection = (moveToSectionID) => {
    // If current selected is the same as where it belongs don't move it.
    if (moveToSectionID === ticket.belongsTo) return;

    onSetMoveTicketToSection(ticket.id, moveToSectionID, ticket.belongsTo);
  }

  return (

    <div className='move-ticket'>
      <select className='select-box' onChange={(e) => beforeMoveTicketToAnotherSection(parseInt(e.target.value))} >
        <option  key={sectionTicketBelongs.id} value={sectionTicketBelongs.id} >{sectionTicketBelongs.name}</option>
        {
          sectionsTicketDoesntBelong.map(section => 
            <option key={section.id} value={section.id} >{section.name}</option>
          )
        }
      </select>
    </div>
  )
}