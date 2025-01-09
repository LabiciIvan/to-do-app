export default function Profile({profiles, profile = null, onSetProfile}) {

  return (
    <div className='home'>
      Profile Page
      <h4>Selected Profile: { profile && profile.name}</h4>
      {
        profiles.map(userProfile => 
          <div className="user" key={userProfile.id} onClick={() => onSetProfile(() => userProfile)}>
            {
              userProfile.name
            }
          </div>
        )
      }
    </div>
  )
}