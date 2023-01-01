import React from 'react'
import UserEntryCard from '../uicommon/UserEntryCard'
import UserPostCard from '../uicommon/UserPostCard'
import { userPostModel } from '@/assets/model/userPost'

type Props = {}

const Feeds = (props: Props) => {
  return (
    <div className='feeds'>
      <UserEntryCard />
      {
        userPostModel.map(post => (
          <UserPostCard
            key={post.id}
            text={post.text}
            img={post.img}  
          />
        ))
      }
    </div>
  )
}

export default Feeds