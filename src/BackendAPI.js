const serverAddress = "localhost";
const serverPort = "9020";

const querystring = require('querystring');
const getHeaders = new Headers();
getHeaders.append('Accept', 'text/json');

const GetInit = 
{
    method: 'GET',
    headers: getHeaders,
}

export class BackendAPI {


    

    static getLoginUserID(userName, passwordHash) {
        let resource = `http://${serverAddress}:${serverPort}/processGet?${querystring.stringify({type: 'login', username: userName, password: passwordHash})}`;
        console.log(resource);
        return fetch(resource, GetInit);
    }
}