import React from 'react';
import { 
    Search, 
    Person,
    Notifications,
    Chat
} from '@material-ui/icons';
import ProfilePicture from '@/assets/images/person/1.jpeg';

type Props = {}

const Topbar: React.FC<Props> = () => {
  return (
    <div className="topbar-container">
        <div className="inner-container">
            <div className="topbar-left">
                <span className="logo">
                    ReactBook
                </span>
            </div>
            <div className="topbar-center">
                <div className="search-box">
                    <Search className='search-icon'/>
                    <input 
                      type="text"
                      placeholder="Search for friend, post or videos"
                      className="search-box"
                    />
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbar-link">Homepage</span>
                    <span className="topbar-link">Timeline</span>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-icon-item">
                        <Person className='notificition-icon'/>
                        <span className="topbar-icon-badge">1</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Chat className='notificition-icon' />
                        <span className="topbar-icon-badge">2</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Notifications className='notificition-icon' />
                        <span className="topbar-icon-badge">3</span>
                    </div>
                </div>
                <img 
                  src={ProfilePicture} 
                  alt="profile-picture" 
                  className='topbar-picture'
                />
            </div>
        </div>
    </div>
  )
}

export default Topbar