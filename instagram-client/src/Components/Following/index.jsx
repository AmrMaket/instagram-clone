import React from 'react';
import profile from '../../assets/profile1.png';
import '../Following/style.css';

const Following = () => {
    return ( 
        <div conatainer>
            <div className='container_top'>
                <div className='user_image'>
                    <img src={ profile } className='user_img' alt='user_image'/>
                </div>
                <div>
                    <div>User_Name</div>
                    <div>name</div>
                </div>
            </div>
            <div className='people'>People</div>
            <div className='list'>
                <userCards />
            </div>
        </div>
     );
}
 
export default Following;