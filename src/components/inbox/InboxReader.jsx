export default function InboxReader({selected, onSetSelected, onSetCloseInboxReaderComponent, item}) {
  console.log('item', item);


  const formatTimeStamp = (timestamp) => {
    const date = new Date(timestamp);

    // Format it into a readable format
    const options = { 
      weekday:  'long',
      year:     'numeric',
      month:    'long',
      day:      'numeric',
      hour:     '2-digit',
      minute:   '2-digit',
    };

    return date.toLocaleString('en-US', options);
  }

  const formatIntials = (name) => {
    if (!name) return '';
    return name.substring(0, 1).toUpperCase();
  }

  const formatMessage = (message) => {
    if (!message) return '';

    const messageSlitted = message.split("\n");

    return messageSlitted.map(line =>
      <>
      <span>{line}</span>
      <br />
      </>
    );
  }

  return (
    <div className={`inbox-reader ${selected && 'selected'}`}>
      { (item !== undefined ) &&
      <>
        <div className='reader-header'>
          <div className='controls'>
            <i className='bi bi-arrow-left' onClick={() => onSetCloseInboxReaderComponent()}/>
            <i className='bi bi-trash' />
            <i className='bi bi-archive' />
            <i className='bi bi-exclamation-octagon' />
            <i className='bi bi-folder-symlink' />
            <i className='bi bi-envelope-open' />
          </div>

          <div className='title-info'>
            <h4>{item.title}</h4>
          </div>

          <div className='sender-info'>
            <div className='sender'>
              <span className='initials'>
                {formatIntials(item.sender?.name)}
              </span>
              <span className='name'>
                {item.sender?.name}
              </span>
            </div>
            <div className='date'>
              <span>{formatTimeStamp(item.time)}</span>
            </div>
          </div>
        </div>

      <div className='reader-body'>
        <div className='message-content'>
          {formatMessage(item.message)}
        </div>
      </div>
    </>
    }

  </div>
  )
}