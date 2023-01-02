import React from 'react'
import BirthdayImg from '@/assets/images/gift.png'
import Ads from '@/assets/images/ad.png'
import ProfilePicture from '@/assets/images/person/1.jpeg';
import { onlineUserModel } from '@/assets/model/onlineUser';

type Props = {}

const Rightbar = (props: Props) => {
  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <img src={BirthdayImg} alt="bd-img" />
          <span className='birthday-text'>
            <b>Pola Foster</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img 
          src={Ads} 
          alt="ads"
          className='rightbarAds'
        />
        <h4 className="rightbar-title">
          Online Friends
        </h4>
        {
          onlineUserModel.map(user => (
            <ul className="rightbar-friendlist">
              <li className="rightbarfriend">
                <div className="rightbar-profile-img-container">
                  <div className="online-img">
                    <img 
                      src={user.profilePicture} 
                      alt="profile picture"
                    />
                    <span className="rightbar-online"/>
                  </div>
                  <span className="online-username">{user.username}</span>
                </div>
              </li>
            </ul>
          ))
        }
        
      </div>
    </div>
  )
}

export default Rightbar