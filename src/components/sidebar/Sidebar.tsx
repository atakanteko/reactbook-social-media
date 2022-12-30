import React from 'react'
import ActionButton from './actions/ActionButton'
import { sideBarActionsModel } from '@/assets/model/sidebarAction'
import { sidebarPeopleModel } from '@/assets/model/sidebarPeople'
import Divider from '../Divider'
import ActionPeople from './actions/ActionPeople'

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
            <Divider /> 
            <div className="action-people-wrp">
                {
                    sidebarPeopleModel.map(item => (
                        <ActionPeople
                            key={item.id}
                            img={item.img} 
                            name={item.name} 
                        />
                    ))
                }
            </div>  
        </div>
    )
}

export default Sidebar