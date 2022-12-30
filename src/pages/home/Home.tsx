import Container from '@/components/Container'
import Feeds from '@/components/feeds/Feeds'
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
        </Container>
    </div>
  )
}

export default Home