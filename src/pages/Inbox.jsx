import '../scss/inbox.scss';
import { useState } from 'react';
import InboxNavigation from '../components/inbox/InboxNavigation';
import InboxView from '../components/inbox/InboxView';

export default function Inbox({profile, onSaveMessage}) {

  const {mail} = profile ? profile : {mail : {}};

  const [expand, setExpand] = useState(true);

  const [displayView, setDisplayView] = useState('inbox');

  const beforeSaveDrafEmailInApp = (itemMessage) => {
    onSaveMessage(itemMessage, displayView);
  }

  return (
    <div className='inbox-page'>
      <header className='inbox-header'>
        <h1 className='inbox-header__title'>Inbox</h1>
        <p className='inbox-header__subtitle'>Your messages and notifications, all in one place.</p>
      </header>

      <section className='coming-soon'>
        <div className='coming-soon__content'>
          <h2>Coming Soon</h2>
          <p>We're working hard to bring you the best inbox experience. Stay tuned!</p>
          <div className='progress-bar'>
            <div className='progress-bar__fill'></div>
          </div>
        </div>
      </section>

      <footer className='inbox-footer'>
        <p>&copy; 2023 - 2025 To Do. All rights reserved.</p>
      </footer>
    </div>
  );
}