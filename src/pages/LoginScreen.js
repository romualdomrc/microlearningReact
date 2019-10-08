import React from 'react';
import firebase from 'firebase';
import { VieW, FormRoW, TextInpuT, TexT, ButtoN, Div, Form, Input, Button } from "../styles/stylesR";

import { Redirect } from 'react-router-dom'

import "../pure/pure.css"

import { connect } from 'react-redux';
import { tryLogin } from '../actions';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyDHM_im-erbsPVgQOWSQ_j-l1KJPuzdD1k",
            authDomain: "cadastro-f48eb.firebaseapp.com",
            databaseURL: "https://cadastro-f48eb.firebaseio.com",
            projectId: "cadastro-f48eb",
            storageBucket: "",
            messagingSenderId: "234844262067"
          };
          firebase.initializeApp(config);
          



  //método assíncrono promisse
  //Teste inicial do firebase        
  //      firebase.auth().signInWithEmailAndPassword('romualdomrc@gmail.com','123456')
  //        .then(user => {
  //            console.log('Usuário autenticado', user)
  //        })
  //        .catch(error => {
  //            console.log('Usuário não encontrado', error)
  //        })
    }

    onChangeMail(e) {
        console.log(e.target.value);
        this.setState({
            mail: e.target.value
        })
    }

    onChangePassword(e) {
        console.log(e.target.value);
        this.setState({
            password: e.target.value
        })
    }

    tryLogin() {
//        console.log(this.state);
        this.setState({ isLoading: true });

        const { mail, password } = this.state

        this.props.tryLogin({mail, password})
         .then((user) => {
             if (user) {
                console.log('Usuário autenticado');
                this.props.history.push('/courses')

//                this.setState({ message: 'Sucesso'});
//                return this.props.navigation.replace('Main');
             }   
                this.setState({ isLoading: false });
         })
        .catch((error) => {
                console.log('caiu no catch');
                this.setState({ isLoading: false });
                this.setState({ message: this.getMessageByErrorCode(error.code)});
        });
    }

    getMessageByErrorCode(errorCode) {
        switch(errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            default:
                return 'Erro na autenticação';
        }
    }

    renderMessage(){
        const { message } = this.state;
        if (!message)
            return null;
        return (
            <TexT>{ message }</TexT>
        );    
    }

    renderScreen() {
      if (this.state.isLoading)
        return (
            <Div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
            </Div>
        )
      
        return (
            <Div>
            <div className="pure-form">
                <h1 className="pure-button-primary">Bem Vindo</h1>    
                <fieldset className="pure-group">
                    <Input type="email" 
                    className="pure-input-1-1" 
                    placeholder="Email"
                    onChange={this.onChangeMail.bind(this)}/>
                </fieldset>
                <fieldset className="pure-group">
                    <Input type="text" 
                        className="pure-input-1-1" 
                        placeholder="Password"
                        onChange={(e)=>this.onChangePassword(e)}/>
                </fieldset>
                <fieldset className="pure-group">
                <Button type="submit" 
                    className="pure-button pure-button-primary"
                    onClick={()=>this.tryLogin()}>Entrar</Button>
                </fieldset>
            </div>
            </Div>        
      )   
    }  

    render() {
        return (
            this.renderScreen()
        )
    }
}

export default connect(null, { tryLogin } )(LoginScreen)