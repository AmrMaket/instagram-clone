import React from 'react';
import Following from '../../Components/Following';
import Menu from '../../Components/Menu';
import Post from '../../Components/Post';
import './style.css';


const Home = () => {
    return ( 
        <div className='container'>
            <div className='menu'>
                <Menu />
            </div>
            <div className='body'>
                < Post />
                < Post />
            </div>
            {/* <div className='follow'>
                <Following />
            </div> */}
        </div>
     );
}
 
export default Home;