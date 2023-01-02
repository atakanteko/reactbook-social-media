import BirthdayImg from '@/assets/images/gift.png'
import Ads from '@/assets/images/ad.png'
import { onlineUserModel } from '@/assets/model/onlineUser'

type Props = {}

const HomeRightbar = (props: Props) => {
  return (
    <>
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
    </>
  )
}

export default HomeRightbar