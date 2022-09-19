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
    //Cambiar el valor que tenemos en state ^
    changeFullname(event){
        this.setState({
            fullName:event.target.value
        })
    }

     changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }

     changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

     changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    render() { 
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form>
                            {/*The onChange event in React detects when the value of an input element changes.*/}
                            <input type='text' 
                            placeholder='Fullname' 
                            onChange={this.changeFullname}
                            value={this.state.fullName}
                            className='form-control form-group'
                            />

                             <input type='text' 
                            placeholder='Username' 
                            onChange={this.changeUsername}
                            value={this.state.username}
                            className='form-control form-group'
                            />

                             <input type='text' 
                            placeholder='Email' 
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />

                             <input type='password' 
                            placeholder='******' 
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

                            <input type='summit' className='btn btn-danger btn-block' value='Submit'/>



                        </form>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default App;