import Heart from '@/assets/images/heart.png';
import Like from '@/assets/images/like.png';
import { MoreVert } from  '@material-ui/icons';
import { onlineUserModel } from '@/assets/model/onlineUser';

type Props = {
    text?: string,
    img: string,
    date: string,
    like: number,
    comment: number,
    userId: number
}

const UserPostCard = ({ text, img, date, like, comment, userId }: Props) => {
    
  const getUserName = (id:number) => onlineUserModel.find(user => user.id === id)?.username
  
  return (
    <div className='post'>
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-top-wrapper">
                    <img 
                        src={img} 
                        alt="profile picture" 
                    />
                    <span className="post-user-name">{getUserName(userId)}</span>
                    <span className="post-time">{date}</span>
                </div>
                <MoreVert />
            </div>
            <div className="post-center">
                <p>{text}</p>
                <img 
                    src={img} 
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
                    <span>{like} people like it</span>
                </div>
                <div>
                    <span>{comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserPostCard