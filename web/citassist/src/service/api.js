import { HubConnection } from 'signalr-client-react';
import React from 'react';

export default function Hub() {
    let connection = new HubConnection('http://localhost:5000/arrivalHub');

    connection.on('newMessage', data => {
        console.log(data);
    });

    connection.on('error', error => {
        console.log(error);
    });

    connection.start();

    return <div>SignalR test</div>;
}
