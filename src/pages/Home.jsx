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
    <div className='home'>

      <div className='hero-section'>
        <h1 className='welcome'>{welcome}</h1>

        <div className='title'>
          <h1 className='one'>{one}</h1>
          <h1 className='hyphen'>{hyphen}</h1>
          <h1 className='two'>{two}</h1>
        </div>

        <h1 className='subtitle-one'>{subtitleOne}</h1>

        <h1 className='subtitle-two'>{subtitleTwo}</h1>

        <img className='logo' src={logoLanding} alt="Landing Page Logo" /> 
      </div>
    </div>
  )
}