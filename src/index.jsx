import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'

 // Initialize Firebase
 const config = {
  apiKey: "AIzaSyBDZdyb-IK5DrdL91umwrcFNl2QgCUFka0",
  authDomain: "react-firebase-database.firebaseapp.com",
  databaseURL: "https://react-firebase-database.firebaseio.com",
  storageBucket: "react-firebase-database.appspot.com",
  messagingSenderId: "937869248647"
 };
  firebase.initializeApp(config);

class App extends React.Component {
    constructor () {
        super() 
        this.state = {
            name: 'Iban'
        }
    }
    
    componentWillMount () {
        const nameRef = firebase.database().ref().child('object').child('name')

        nameRef.on('value', (snapshot) => {
            this.setState({
                name: snapshot.val()
            })
        })
    }

    render () {
        return <h1>Hola {this.state.name} !</h1>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))