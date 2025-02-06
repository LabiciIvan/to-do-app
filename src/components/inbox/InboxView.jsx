import { useState, useEffect } from 'react';
import InboxReader from './InboxReader';

export default function InboxView({isExpanded, view, mail, onSaveMessage}) {
  const [selected, setSelected] = useState(false);
  
  let mailSection = mail[view];
  
  console.log('view', view);
  console.log('mailSection', mailSection);
  const [selectedMailSectionRow, setSelectedMailSectionRow] = useState({});


  const handleViewSelectedRow = (mailSectionRow) => {
    setSelected(() => true);

    setSelectedMailSectionRow(() => mailSectionRow);
  }

  const closeInboxReaderComponent = (closeTriggeredByView) => {

    setSelected(() => false);

    setSelectedMailSectionRow(() => {});
  }



  return (
    <div className={`inbox-view ${!isExpanded && 'stretch-inbox-view'}`} >

      {mailSection.length > 0 && 
        mailSection.map(mailSectionRow =>
          <div className='row' key={mailSectionRow.id} onClick={() => handleViewSelectedRow(mailSectionRow)}>
            <div className='sender'>
              { mailSectionRow.sender.name }
            </div>
            <div className='title'>
              { mailSectionRow.title }
            </div>
          </div>)
      }

      <InboxReader
        selected={selected}
        currentSelectedParent={view}
        onSetSelected={setSelected}
        item={selectedMailSectionRow}
        onSetCloseInboxReaderComponent={closeInboxReaderComponent}
        enableEdit={view === 'drafts' || view === 'compose'}
        onSaveMessage={onSaveMessage}
      />

    </div>
  )
}