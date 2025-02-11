import '../scss/profile-page.scss';
import ProfileIcon from '../components/ProfileIcon.jsx';

export default function Profile({ profiles, profile, onSetProfile }) {

  return (
    <div className='profile-container'>
      <h1 className='profile-title'>Select Your Profile</h1>
      <p className='profile-description'>
        Choose a profile to proceed. This page serves as a mock login, allowing you to pick your desired profile.
      </p>
      <div className='profile-grid'>
        {profiles.map((p) => (
          <div 
            key={p.name} 
            className='profile-card' 
            onClick={() => onSetProfile(p)}
          >
            <img src={p.image} alt={p.name} className='profile-card-image' />
            <div>
              <h2 className='profile-card-name'>{p.name}</h2>
              <p className='profile-card-role'>{p.role}</p>
            </div>
          </div>
        ))}
      </div>
      {profile && (
        <div className='profile-details'>
          <h2 className='profile-details-title'>{profile.name}</h2>
          <p className='profile-details-info'>Age: {profile.age} | Sex: {profile.sex}</p>
          <p className='profile-details-info'>Country: {profile.country}</p>
          <p className='profile-details-description'>{profile.description}</p>
          <h3 className='profile-tech-title'>Tech Stack:</h3>
          <ul className='profile-tech-list'>
            {profile.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};