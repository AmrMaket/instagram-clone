import React from 'react';
import home from '../../assets/home.svg';
import explore from '../../assets/explore.svg';
import notifications from '../../assets/notifications.svg';
import profile from '../../assets/profile1.png';
import inbox from '../../assets/inbox.svg';
import './style.css';




const Menu = () => {
    return ( 
        <div className='menu'>
            <div className='icon'>
                <img src={home} alt='#' className='bookmark-logo'/ >
            </div>
            <div className='icon'>
                <img src={inbox} alt='#' className='inbox-logo'/ >
            </div>
            <div className='icon'>
                <img src={explore} alt='#' className='explore-logo'/ >
            </div>
            <div className='icon'>
                <img src={notifications} alt='#' className='notifications-logo'/ >
            </div>
            <div className='icon'>
                <img src={profile} alt='#' className='profileIcon'/ >
            </div>
        </div>
     );
}
export default Menu ;