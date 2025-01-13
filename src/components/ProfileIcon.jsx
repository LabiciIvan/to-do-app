import '../scss/profile-icon.scss'

export default function ProfileIcon({profile = null, width = 30, height = 30 , providedMessage = null, enableName = true}) {

  const {id, name, image} = profile || {};

  const imageStyles = {
    display: 'flex',
    width: width + 'px',
    height: height + 'px',
  }

  return (
    <div className='profile-icon'>
      {
        profile ?
        <>
        <div className='image'>
          <img src={image ? image : ''} alt='Profile image' style={imageStyles}/>
        </div> 
        {enableName && <div className='name'>{name}</div>}
        </>
        :
        (providedMessage ? 
          <div className='message'>{providedMessage}</div> :
          ''
        )
      }
    </div>
  )
}