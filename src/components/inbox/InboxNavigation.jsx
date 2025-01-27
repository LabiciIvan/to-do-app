import InboxLink from './InboxLink';

export default function InboxNavigation({ onSetExpand, isExpanded, mail, onSetDisplayView}) {

  const inboxLinks = Object.keys(mail);

  return (
    <div className={`inbox-navigation ${!isExpanded && 'collapse'}`}>

      <div className='expansion-button'>
        {isExpanded ? <i className='bi bi-arrow-bar-left' onClick={() => onSetExpand(() => false)} /> : <i className='bi bi-arrow-bar-right' onClick={() => onSetExpand(() => true)} />}
      </div>

      {
        isExpanded &&
        inboxLinks.map(link => <InboxLink key={link} link={link} onSetDisplayView={onSetDisplayView}/>)
      }
    </div>
  )

}