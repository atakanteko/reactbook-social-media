import React from 'react'

type Props = {
  name: string,
  img: string
}

const ActionPeople = ({img, name}: Props) => {
  return (
    <div className="action-people">
        <div className='ppl-image'>
            <img src={img} alt="pp" />
        </div>
        <span className="action-people-text">
            {name}
        </span>
    </div>
  )
}

export default ActionPeople