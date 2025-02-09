import '../scss/home.scss';
import logo from '../assets/landing-page-logo.png';

export default function Home() {

  const text = {
    title: {
      one: 'To',
      two: 'Do',
      hyphen: '-',
    },
    welcome: 'Welcome to',
    subtitleOne: 'The smarter, simpler way to organize',
    subtitleTwo: 'your ideas and tasks',
    logoLanding:logo
  }

  const {welcome, title: {one, two, hyphen}, subtitleOne, subtitleTwo, logoLanding} = text;

  return (
    <div className='landing-page'>
      <header className='header-landing'>
        <h1 className='header-landing__title'>To Do</h1>
        <p className='header-landing__subtitle'>Organize, track, and manage your projects with ease.</p>
        <button className='header-landing__cta'>Get Started</button>
      </header>

      <section className='features'>
        <div className='features__item'>
          <h2>Task Management</h2>
          <p>Create, assign, and track tasks effortlessly.</p>
        </div>
        <div className='features__item'>
          <h2>Collaboration</h2>
          <p>Work seamlessly with your team in real-time.</p>
        </div>
        <div className='features__item'>
          <h2>Progress Tracking</h2>
          <p>Monitor project progress with intuitive dashboards.</p>
        </div>
      </section>

      <footer className='footer'>
        <p>&copy; 2023 - 2025 To Do. All rights reserved.</p>
      </footer>
    </div>
  );
}