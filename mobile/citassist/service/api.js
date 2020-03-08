import {Alert} from 'react-native';

const API_URL = 'https://winassist.azurewebsites.net';

const login = async (body)=>{
    const response = await fetch(`${API_URL}/signin`, {
        method:'POST',
        headers: new Headers({
            'content-type':'Application/json'
        }),
        body:JSON.stringify(body)
    });
    const jsonReponse = await response.json();
    if(jsonReponse.data)
        connectToSocket();
    return jsonReponse.data? jsonReponse.data.token : null;
}

const connectToSocket = ()=>{
    const signalR = require("@microsoft/signalr");
 
    let connection = new signalR.HubConnectionBuilder()
        .withUrl(`${API_URL}/arrivalhub`)
        .build();
    
    connection.on("ReceiveMessage", data => {
        Alert.alert('Message', data.toString())
        console.log(data);
    });
    
    connection.start();
}

export {
    login
}