import ProfilePicture from '@/assets/images/person/1.jpeg';
import PostPicture from '@/assets/images/post/1.jpeg';
import Heart from '@/assets/images/heart.png';
import Like from '@/assets/images/like.png';

import { MoreVert } from  '@material-ui/icons';

type Props = {}

const UserPostCard = (props: Props) => {
  return (
    <div className='post'>
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-top-wrapper">
                    <img 
                        src={ProfilePicture} 
                        alt="profile picture" 
                    />
                    <span className="post-user-name">Atakan Teko</span>
                    <span className="post-time">5 mins ago</span>
                </div>
                <MoreVert />
            </div>
            <div className="post-center">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt, excepturi maiores in, iusto officiis minus odit quis architecto quam a tenetur sequi eos voluptatibus fugiat quos itaque! Laborum, similique.</p>
                <img 
                    src={PostPicture} 
                    alt="post image" 
                />
            </div>
            <div className="post-bottom">
                <div className="post-bottom-wrapper">
                    <img 
                        src={Like}
                        alt="like"
                    />
                    <img 
                        src={Heart}
                        alt="heart"
                    />
                    <span>32 people like it</span>
                </div>
                <div>
                    <span>9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserPostCard