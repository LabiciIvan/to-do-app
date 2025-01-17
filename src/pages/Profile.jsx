import '../scss/profile-page.scss';
import ProfileIcon from '../components/ProfileIcon.jsx';

export default function Profile({profiles, profile = null, onSetProfile}) {

  return (
    <div className='profile-page'>
      <div className='header'>
        <div className='title'>
          <h4>Profile</h4>
        </div>

        <div className='description'>
          <h4>The Profile page serves as a gateway for simulating user login within this mock application</h4>
          <h4>By selecting a profile user, you unlock the full range of features designed to mimic real-world functionality.</h4>
          <div className='functionality'>
            <ul>
              <li>Creating new categories.</li>
              <li>Adding sections to categories.</li>
              <li>Creating and assigning tickets to users.</li>
              <li>Commenting on tickets and replying to comments.</li>
            </ul>
          </div>
          <h4>While some features are accessible without selecting a profile, choosing a profile user is recommended to experience the application’s full functionality.</h4>
        </div>
      </div>

      <div className='body'>
        <div className='left'>
        {
          profiles.map(userProfile => 
            <div className='user' key={userProfile.id} onClick={() => onSetProfile(() => userProfile)}>
              {
                <ProfileIcon profile={userProfile} width={100} height={100}/>
              }
            </div>
          )
        }
        </div>
        <div className='right'>
          {profile && 
            <div className='card'>
              <div className='short-details'>
                <div className='details-left'>
                  <img src={profile.image} alt="" />
                </div>

                <div className='details-right'>
                  <p><strong>Name:</strong> {profile.name}</p>
                  <p><strong>Age:</strong> {profile.age}</p>
                  <p><strong>Role:</strong> {profile.role}</p>
                  <p><strong>Sex:</strong> {profile.sex}</p>
                  <p><strong>Country:</strong> {profile.country}</p>
                </div>
              </div>

              <div className='large-details'>
                <p className='description'>
                  "{profile.description}"
                </p>

                <div className='stack'>
                  <strong>Tech Stack:</strong>
                  <ul>
                    {
                      profile.techStack.map(stack => 
                        <li key={stack}>{stack}</li>
                      )
                    }
                  </ul>
                </div>

                <div className='perks'>
                  <strong>Perks:</strong>
                  <ul>
                    {
                      profile.perks.map(perk => 
                        <li key={perk}>{perk}</li>
                      )
                    }
                  </ul>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}