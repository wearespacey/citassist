import React from 'react';

export default function Hub() {
    const signalR = require('@aspnet/signalr');
    let connection = new signalR.HubConnectionBuilder()
        .withUrl('http://winassist.azurewebsites.net/arrivalhub')
        .build();

    connection.on('ReceiveMessage', data => {
        console.log(data);
    });

    connection.start();

    return <div>SignalR test</div>;
}
