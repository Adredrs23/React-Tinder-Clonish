import React,{useState} from 'react';
import "./ChatScreen.css";
import Avatar from '@material-ui/core/Avatar'

const ChatScreen = () => {

    const [input,setInput] = useState('');

    const [messages,setMessages] = useState([
        {
            name:"Ellen",
            image:"https://robohash.org/asdf",
            message:"whats ssasdip"
        },
        {
            name:"Ellen",
            image:"https://robohash.org/asdf",
            message:"U fine?"
        },{
            message:"yup"
        }
    ]);

    const handleSend = (e) =>{
        e.preventDefault();

        setMessages([...messages,{message:input}])
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WIH ELLEN ON 10/08/20</p>

            {
                messages.map(message => {
                        return (
                            message.name 
                            ?
                                (
                                    <div className="chatScreen__message">
                                        <Avatar className="chatScreen__image" src={message.image} alt={message.name} />
                                        <p className="chatScreen__text">{message.message}</p>
                                    </div>
                                )
                            :
                                (
                                    <div className="chatScreen__message">
                                        <p className="chatScreen__textUser">{message.message}</p>
                                    </div>
                                )
                        )
                    })
            }

            
            <form className="chatScreen__input">
                <input type="text" placeholder='Type a message' className="chatScreen__inputField" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button type="submit" onClick={handleSend} className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
