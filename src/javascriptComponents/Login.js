import React, {Component} from 'react'
import '../cssFilesandImages/login.css'
import Preview from './Preview'
import Inbox from './Inbox'
import {FaRegUser,FaLock} from 'react-icons/fa'

class Login extends Component{
   constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            answer: false,
            i:0,
            fati:'torres'
        }

        this.handleUser=this.handleUser.bind(this)
        this.handleLogin=this.handleLogin.bind(this)
        this.todoRegister=this.todoRegister.bind(this)
}
async handleUser(event){
    const {name,value}=event.target
    this.setState({
        [name]:value
    })
  var arr=await JSON.parse(localStorage.getItem('userprofile'))
  if(localStorage.getItem('userprofile')){
    for(var j=0;j<arr.length;j++){
         if(this.state.username!==arr[j].userValue){
                this.setState({
                    answer:true
                })
                 
             }
         if(this.state.username===arr[j].userValue){
                this.setState({
                    answer:false
                })
                break;
            } 
             
    } 
}
    console.log(this.state.answer)    
}   

todoRegister(){
    this.props.history.push({
        pathname:'/register'
    })
}
handleLogin()
{
if(this.state.answer){
    alert('Please Register Before You Start Any Todo')
}
if(!localStorage.getItem('userprofile')){
    alert('Please Register Before You Start Any Todo')
}
if(this.state.username==''||this.state.password==''){
    alert('Please Fill In All Your Details To Login to Your Todo')
    this.state.fati='dembele'
}
if(localStorage.getItem('userprofile') && this.state.answer===false && this.state.fati=='torres'){
this.props.history.push({
    pathname:'/inbox'
})
}}
    render()
    {
         return(
        <> 
         <div className='background'>
            <form>  

            <div className='welcome'> <p>Welcome</p></div>
             <div className='sign-in'> <p>Please write your username and password to Login into your todo.</p>
             </div>
              <div className='container'>
             <div className='inputBody'><div className='regIcon'><FaRegUser /></div><input autoFocus type='text' placeholder='Username' name='username' value={this.state.username} onChange={this.handleUser} className='username'/></div>
              <div className='inputBody2'><div className='regIcon2'><FaLock /></div><input type='password' placeholder='Password' name='password' value={this.state.password} onChange={this.handleUser} className='password'/></div>
              <div className='buttonParent'><button className='button' onClick={this.handleLogin}>LOGIN</button></div>
             </div>
            </form>
            <div className='container2'>
                <p className='forgot'>Forgot Password?</p>
                <p>|</p>
                <p className='regis' onClick={this.todoRegister}>Register</p>
            </div>
         </div> 
        </>
        )
    }
}

export default Login