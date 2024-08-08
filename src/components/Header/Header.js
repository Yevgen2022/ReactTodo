import logo from '../../assets/img/PaintCat.jpeg';
import phone from '../../assets/img/phone.png';
import location from '../../assets/img/location.png';
import email from '../../assets/img/email.png'
import './header.css'
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='header__img'>
          <img src={logo} alt='#' />
        </div>

        <nav className='header__nav'>
          <ul className='header__ul'>
            <li className='header__li'><Link to="/create-task" className='nav__link'>Create one task</Link></li>
            <li className='header__li'><Link to="/show-tasks" className='nav__link'>Show tasks</Link></li>
            <li className='header__li'><Link to="/corporate-tasks" className='nav__link'>Create corporate tasks</Link></li>
            <li className='header__li'><Link to="/vacation-planning" className='nav__link'>Vacation planning</Link></li>
            <li className='header__li'><Link to="/city-events" className='nav__link'>City events</Link></li>
          </ul>
        </nav>


        <div className='header__contact'>
          <div className='contact__img'>
            <img src={phone} alt="#"></img>
          </div>
          <div className='contact__img'>
            <img src={location} alt="#"></img>
          </div>
          <div className='contact__img'>
            <img src={email} alt="#"></img>
          </div>
        </div>


      </header>
    )
  }
}

export default Header;