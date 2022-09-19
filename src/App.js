import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
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
        this.changeFullname = this.changeFullname.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
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

    onSubmit(event){
        event.preventDefault()//Para que no se vuelva a cargar la pagina
        //values that the user hasn enter
        const registered = {
            fullName:this.state.fullName,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }

        //Enviar al backend
        axios.post('http://localhost:4000/app/signup', registered)
            .then(res=> console.log(res.data))

        //Despues
        this.setState({
            fullName:'',
            username:'',
            email:'',
            password:''
        })    


    }

    render() { 
        return (
            <div className='justify-content-center container text-center'>
                <div className='container d-flex justify-content-center flex-column align-items-center'>
                    <h1>Sign in</h1>
                    <div className='form-div' style={{width:'400px'}}>
                        <form onSubmit={this.onSubmit}>
                            {/*The onChange event in React detects when the value of an input element changes.*/}
                            <input type='text' 
                            placeholder='Fullname' 
                            onChange={this.changeFullname}
                            value={this.state.fullName}
                            className='form-control form-group m-3'
                            />

                             <input type='text' 
                            placeholder='Username' 
                            onChange={this.changeUsername}
                            value={this.state.username}
                            className='form-control form-group m-3'
                            />

                             <input type='text' 
                            placeholder='Email' 
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group m-3'
                            />

                             <input type='password' 
                            placeholder='******' 
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group m-3'
                            />

                            <input type='submit' className='btn btn-danger btn-block m-3' value='Submit' style={{width:'200px'}}/>



                        </form>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default App;