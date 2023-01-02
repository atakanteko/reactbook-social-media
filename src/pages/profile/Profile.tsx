import Container from '@/components/Container'
import Feeds from '@/components/feeds/Feeds'
import Rightbar from '@/components/rightbar/Rightbar'
import Sidebar from '@/components/sidebar/Sidebar'
import Topbar from '@/components/topbar/Topbar'
import UserImg from '@/assets/images/person/7.jpeg'
import CoverImg from '@/assets/images/post/3.jpeg'

type Props = {}

const Profile = (props: Props) => {
    return (
        <div>
            <Topbar />
            <Container>
                <Sidebar />
                <div className="profile">
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img 
                                    src={CoverImg} 
                                    alt="cover image" 
                                    className="profileCoverImg"
                                />
                                <img 
                                    src={UserImg} 
                                    alt="user image" 
                                    className="profileUserImg"
                                />
                            </div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">Atakan TEKO</h4>
                                <span className="profileInfoDesc">Hello there!</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">
                            <Feeds />
                            <Rightbar profile/>
                        </div>
                    </div>
                </div>  
            </Container>
        </div>
      )
}

export default Profile