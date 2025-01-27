export default function InboxLink({ link , onSetDisplayView}) {

  return (
    <div className='link' onClick={() => onSetDisplayView(() => link)}>{link}</div>
  )
}