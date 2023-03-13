import useGetMessages from "../../hooks/useGetMessages";
import "./SidebarNav.css"
import { HiUsers, HiChatAlt } from "react-icons/hi";
import { useState } from "react";
import { useRoom } from "../../contexts/RoomContext";

const SidebarNav = ()=>{

    const { users } = useGetMessages();
    const {setRoom} = useRoom()


    const [activeIndex,SetActiveIndex] = useState(0)


    return(
        <div className="sidebar__nav">

            <div className="sidebar__options">
                <button className="sidebar__btn" onClick={()=> SetActiveIndex(0)}><HiChatAlt/></button>
                <button className="sidebar__btn" onClick={()=> SetActiveIndex(1)}><HiUsers/></button>
            </div>

            {!(users && activeIndex === 1 ) ? null:
                <ul className="sidebar__members">
                    {users.map((user) => <User name={user.name} picUrl={user.profilePicUrl} key={user.id}/>)}
                </ul>
            }

            {activeIndex !== 0 ? null:
                <div className="sidebar__channels">
                    {[1,2].map( el => <button onClick={(ev)=> setRoom(el)} key={el} className="channel__btn">Channel #{el}</button>)}
                </div>
                
            }



        </div>
    )
}

const User = ({name,picUrl})=> {
    return(
        <li className="sidebar__user">
            <img src={picUrl} className="sidebar__img" alt={name}/>
            <p className="sidebar__username">{name}</p>
        </li>
    )
}

export default SidebarNav