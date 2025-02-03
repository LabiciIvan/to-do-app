export default function InboxControls({onSetBeforeClosingTheView}) {

  return (
    <div className='controls'>
      <i className='bi bi-arrow-left' onClick={() => onSetBeforeClosingTheView()}/>
      <i className='bi bi-trash' />
      <i className='bi bi-archive' />
      <i className='bi bi-exclamation-octagon' />
      <i className='bi bi-folder-symlink' />
      <i className='bi bi-envelope-open' />
    </div>
  );
}