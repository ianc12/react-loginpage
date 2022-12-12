import React from 'react';
import { BackendAPI } from '../BackendAPI.js';
import './login.css';


class Login extends React.Component
{
    
    constructor (props)
    {
        super(props);
        this.state = {user: '',
                     password: '',
                     loginResultClass: 'none',
                     loginResultMessage: ''}; 
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(event) {
        this.setState({user: event.target.value});
    }

    handlePassChange(event) {
        this.setState({password: event.target.value});
    }


    handleSubmit(event) {
        this.setState({loginResultClass : 'none'});
        event.preventDefault();
        BackendAPI.getLoginUserID(this.state.user, this.state.password).then((res) => {return res.json()}).then((json) => 
        {
            if (json.userid != null) 
            {
                this.setState({loginResultClass: 'success', loginResultMessage: 'Sucess! logging in...'});
            }
            else 
            {
                this.setState({loginResultClass: 'failure'});
                if (json.username == null)
                {
                    this.setState({loginResultMessage: 'Unrecognized username'})
                }
                else 
                {
                    this.setState({loginResultMessage: 'Password incorrect'});
                }
            }
        }).catch((e) => {
            console.log("Error with login request");
            console.log(e);
            this.setState({loginResultClass: 'failure'});
            this.setState({loginResultMessage: 'Error with login server'});
        });
        
        
    }

    render (){
        return (
            <div id ='login'>
                <form  onSubmit={this.handleSubmit}>
                    <label >Username</label><br/>
                    <input type="text" id="username" value={this.state.user} onChange={this.handleUserChange}></input><br/>
                    <label >Password</label><br/>
                    <input type="text" id="password" value={this.state.password} onChange={this.handlePassChange}></input><br/>
                    <input id='loginbutton' type='submit' value="Login"></input>
                </form>
                <h2 className={this.state.loginResultClass}>{this.state.loginResultMessage}</h2>
            </div>
            
        );
    }
} 
    


export default Login;