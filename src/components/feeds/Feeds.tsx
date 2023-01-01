import React from 'react'
import UserEntryCard from '../uicommon/UserEntryCard'
import UserPostCard from '../uicommon/UserPostCard'

type Props = {}

const Feeds = (props: Props) => {
  return (
    <div className='feeds'>
      <UserEntryCard />
      <UserPostCard />
      <UserPostCard />
      <UserPostCard />
    </div>
  )
}

export default Feeds