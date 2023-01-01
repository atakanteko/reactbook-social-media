import React from 'react'
import ProfilePicture from '@/assets/images/person/1.jpeg';
import Divider from '../Divider';
import { 
    PhotoLibrary, 
    AlternateEmail, 
    LocationOn, 
    Mood 
} from  '@material-ui/icons';

type Props = {}

const UserEntryCard = (props: Props) => {
  return (
    <div className='user-entry-card'>
        <div className='entry'>
            <img 
                src={ProfilePicture} 
                alt="profile picture"
            />
            <input 
                type="text"
                placeholder="What's in your mind?"
            />
        </div>
        <Divider />
        <div className="card-actions">
            <div className="card-action-items">
                <div className='card-action-item'>
                    <PhotoLibrary htmlColor="tomato"/>
                    <span>Photo or Video</span>
                </div>
                <div className='card-action-item'>
                    <AlternateEmail htmlColor="blue"/>
                    <span>Tag</span>
                </div>
                <div className='card-action-item'>
                    <LocationOn htmlColor="green"/>
                    <span>Location</span>
                </div>
                <div className='card-action-item'>
                    <Mood htmlColor="goldenrod"/>
                    <span>Feelings</span>
                </div>
            </div>
            <button>
                Share
            </button>
        </div>
    </div>
  )
}

export default UserEntryCard