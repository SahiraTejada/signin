import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    //pasar todos los campos para el form sign in
    constructor(){
        super()
        this.state ={
            fullName:'',
            username:'',
            email:'',
            password:''

        }
    }
    
    render() { 
        return (
            <div>

            </div>
        );
    }
}
 
export default App;