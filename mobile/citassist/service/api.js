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
    return jsonReponse.data? jsonReponse.data.token : null;
}

export {
    login
}