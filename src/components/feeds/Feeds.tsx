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
            text={post.desc}
            img={post.photo}
            comment={post.comment}
            like={post.like}
            date={post.date}
            userId={post.userId}
          />
        ))
      }
    </div>
  )
}

export default Feeds