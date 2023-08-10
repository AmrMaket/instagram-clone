import React from 'react';
import profile from '../../assets/profile1.png';

const UserCard = () => {
    return ( 
        <div className='container'>
            <div className='user_image'>
                <img src={ profile } alt='profile' />
            </div>
            <div className='user_info'>
                <div className='user_name' >Joe Doe</div>
                <div className='state' >Following</div>
            </div>
            <div className='unfollow'>Unfollow</div>
        </div>
     );
}
 
export default UserCard
