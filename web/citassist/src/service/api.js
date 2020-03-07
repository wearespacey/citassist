import { HubConnection } from 'signalr-client-react';
import React from 'react';

export default function Hub() {
    let connection = new HubConnection(
        'https://winassist.azurewebsites.net/arrivalHub'
    );

    connection.on('newMessage', data => {
        console.log(data);
    });

    connection.start();

    return <div>SignalR test</div>;
}
