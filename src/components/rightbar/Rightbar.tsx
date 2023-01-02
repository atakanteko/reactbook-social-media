import HomeRightbar from "./HomeRightbar";
import ProfileRightbar from "./ProfileRightbar";
type Props = {
  profile?: boolean
}

const Rightbar = ({ profile }: Props) => {
  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        {
          profile ? <ProfileRightbar /> : <HomeRightbar />
        }
      </div>
    </div>
  )
}

export default Rightbar