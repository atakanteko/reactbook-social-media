import React from 'react'

type Props = {
    children: React.ReactNode
}

const Container: React.FC<Props> = ({children}) => {
  return (
    <div className='social-container'>
        <div className="container-wrapper">
            {children}
        </div>
    </div>
  )
}

export default Container