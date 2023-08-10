import React from 'react';
import nature from '../../assets/nature.png';
import profile from '../../assets/profile1.png';
import pmore from '../../assets/3dots.png';
import like from '../../assets/like.png';
import share from '../../assets/share.png';
import comment from '../../assets/comment.png';
import './style.css';


const Post = () => {
    return ( 
        <div className='container'>
            <div className='post_header'>
                <div className='user_info'>
                    <div className='profile'>
                        <img src={profile} alt='user_image' />
                    </div>
                    <div className='user-details'>Joe Doe . 23h</div>
                </div>
                <div className='post_more'>
                    <img src={pmore} alt='settings' />
                </div> 
            </div>
                <div className='image_container'>
                    <img src= {nature} alt='nature' className='post_image'/>
                </div>
                <div className='reactions'>
                    <div className='reaction-icons'>
                        <img src={like} alt='like_reaction' /> 
                        <img src={comment} alt='comment_reaction' /> 
                        <img src={share} alt='share_reaction' /> 
                    </div>
                    <div className='likes'>145k likes</div>
                </div>
        </div>
     );
}
 
export default Post;
