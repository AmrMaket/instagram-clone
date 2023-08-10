import React from 'react';
import './style.css';
import logo from '../../assets/instagram-text-logo-83656.png'
import home from '../../assets/home.png';
import search from '../../assets/search.png';
import export1 from '../../assets/export.png';
import reels from '../../assets/reels.png';
import messages from '../../assets/messages.png';
import notifications from '../../assets/notifications.png';
import create from '../../assets/create.png';
import profile from '../../assets/profile1.png';
import more from '../../assets/more.png';


const Menu = () => {
    return ( 
        <div className='container'>
            <div className='menu-logo'>
                <img src={logo}  alt= 'logo' />
            </div>
            <div className='menu-body'>
                <div className='menu-icon'>
                    <img src={home}  alt='home' />
                    <div>Home</div>
                </div>
                <div className='menu-icon'>
                    <img src={search}  alt='search' />
                    <div>Search</div>
                </div>
                <div className='menu-icon'>
                    <img src={export1}  alt='explore' />
                    <div>Export</div>
                </div>
                <div className='menu-icon'>
                    <img src={reels}  alt='reels' />
                    <div>Reels</div>
                </div>
                <div className='menu-icon'>
                    <img src={messages}  alt='meassages' />
                    <div>Messages</div>
                </div>
                <div className='menu-icon'>
                    <img src={notifications}  alt='notifications' />
                    <div>Notifications</div>
                </div>
                <div className='menu-icon'>
                    <img src={create}  alt='create' />
                    <div>Create</div>
                </div>
                <div className='menu-icon'>
                    <img src={profile}  alt='profile' />
                    <div>Profile</div>
                </div>
                <div className='menu-icon'>
                    <img src={more}  alt='More' />
                    <div>More</div>
                </div>
            </div>
        </div>
     );
}
 
export default Menu;