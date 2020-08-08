import React from 'react';
import './Chats.css';
import Chat from "./Chat"

const Chats = () => {

    let chatPeople = [
        {
            name:'user1',
            message:'test',
            timestamp:'35 mins ago',
            profilePic:'https://robohash.org/as'
        },
        {
            name:'user2',
            message:'test',
            timestamp:'35 mins ago',
            profilePic:'https://robohash.org/ass'
        },
    ];

    return (
        <div className="chats">
            {
                chatPeople.map(item=>{
                    return (
                        <Chat 
                            name={item.name}
                            message={item.message}
                            timestamp={item.timestamp}
                            profilePic={item.profilePic}
                        />
                    )
                })
            }
            
        </div>
    )
}

export default Chats
