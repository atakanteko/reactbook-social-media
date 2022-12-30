import Container from '@/components/Container'
import Feeds from '@/components/feeds/Feeds'
import Rightbar from '@/components/rightbar/Rightbar'
import Sidebar from '@/components/sidebar/Sidebar'
import Topbar from '@/components/topbar/Topbar'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <Topbar />
        <Container>
          <Sidebar />
          <Feeds />
          <Rightbar />
        </Container>
    </div>
  )
}

export default Home