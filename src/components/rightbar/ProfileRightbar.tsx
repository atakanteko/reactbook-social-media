import React from 'react'
import UserPicture1 from '@/assets/images/person/1.jpeg';
import UserPicture2 from '@/assets/images/person/2.jpeg';
import UserPicture3 from '@/assets/images/person/3.jpeg';
import UserPicture4 from '@/assets/images/person/4.jpeg';
import UserPicture5 from '@/assets/images/person/5.jpeg';
import UserPicture6 from '@/assets/images/person/6.jpeg';
import UserPicture7 from '@/assets/images/person/7.jpeg';
import UserPicture8 from '@/assets/images/person/8.jpeg';
import UserPicture9 from '@/assets/images/person/9.jpeg';
import UserPicture10 from '@/assets/images/person/10.jpeg';

type Props = {}

const ProfileRightbar = (props: Props) => {
  return (
    <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Istanbul</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={UserPicture1}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={UserPicture2}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={UserPicture3}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={UserPicture4}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={UserPicture5}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={UserPicture6}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
  )
}

export default ProfileRightbar