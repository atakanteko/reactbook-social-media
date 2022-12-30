import React from 'react'
import ActionButton from './actions/ActionButton'
import { sideBarActionsModel } from '@/assets/model/sidebarAction'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className='sidebar'>
            <div className="action-btn-wrp">
                {
                    sideBarActionsModel.map(item => (
                        <ActionButton
                            key={item.id}
                            materialIcon={item.icon} 
                            text={item.text} 
                        />
                    ))
                }
            </div>
            
        </div>
    )
}

export default Sidebar