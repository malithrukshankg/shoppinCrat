import React from 'react'
import './sign-in.styles.scss'
import FromInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            email:'',
            password:''
        }
    }
    handleChange=event=>{
        const {value,name}=event.target

        this.setState({[name]:value})
     }

    handleSubmit=event=>{
       event.preventDefault();

       this.setState({email:'',password:''})
    }

    render(){
        return(
           <div className='sign-in'>
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>

               <form onSubmit={this.handleSubmit}>

                   <FromInput 
                   name='emial' 
                   type="email" 
                   value={this.state.email} 
                   handleChange={this.handleChange} 
                   label='email'
                   required/>
                 

                   <FromInput
                    name='password'
                    type="password" 
                    value={this.state.password}
                    handleChange={this.handleChange} 
                    label='passsword'
                    required/>
                  

                   <CustomButton type="submit" value="submit form">Sign In</CustomButton>
               </form>
           </div> 
        )
    }
}


export default SignIn;