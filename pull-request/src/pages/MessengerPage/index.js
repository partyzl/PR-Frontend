import React, { useState } from 'react';
import { Message } from '../components';

const MessengerPage = () => {

    const [ messages, setMessages ] = useState([]);

    return (
        <div className="container">
            {
                messages.map(message => <Message message={message}/>
            }
        </div>
    )
}

export default MessengerPage;
