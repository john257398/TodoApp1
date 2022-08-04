import React, {Component} from "react";
import '../cssFilesandImages/addedtodo.css'
import {BiArrowBack} from 'react-icons/bi'

class editTodo extends Component{
    constructor(props){
        super(props)
        var editedTodo=JSON.parse(localStorage.getItem('edited'))
        
        this.state={
            todoTopic:editedTodo[0][0],
            todoInfo:editedTodo[0][1],
            todoTime:editedTodo[0][2],
            todoDate:editedTodo[0][3],
            gotten:editedTodo[0][4]
        }
        
    this.AddTodo=this.AddTodo.bind(this)
    this.changeTodoTopic=this.changeTodoTopic.bind(this)
    this.changeTodoInfo=this.changeTodoInfo.bind(this)
    this.changeTodoTime=this.changeTodoTime.bind(this)
    this.changeTodoDate=this.changeTodoDate.bind(this)
    this.toInbox=this.toInbox.bind(this)
    }
    
    toInbox(){
        this.props.history.push({
            pathname:'/inbox'
        })
    }

   async changeTodoTopic(event){
        this.setState({
            todoTopic:event.target.value,
        })
        this.props.history.push({
            pathname:'/edittodo'
        })
    }
  
    changeTodoInfo(event){
        this.setState({
            todoInfo:event.target.value
        })
    }

    changeTodoTime(event){
        this.setState({
            todoTime:event.target.value
        })
    }

 changeTodoDate(event){
        this.setState({
            todoDate:event.target.value
        })
    }
    async AddTodo(){
        this.props.history.push({
            pathname:'/inbox'
        })
      
      var editedTodo=JSON.parse(localStorage.getItem('edited'))
        editedTodo[0][0]=this.state.todoTopic
        editedTodo[0][1]=this.state.todoInfo
        editedTodo[0][2]=this.state.todoTime
        editedTodo[0][3]=this.state.todoDate
        await localStorage.setItem('edited',JSON.stringify(editedTodo))
        var putTodo=JSON.parse(localStorage.getItem('todo'))
        putTodo[this.state.gotten][0]=editedTodo[0][0]
        putTodo[this.state.gotten][1]=editedTodo[0][1]
        putTodo[this.state.gotten][2]=editedTodo[0][2]
        putTodo[this.state.gotten][6]=editedTodo[0][3]
        await localStorage.setItem('todo',JSON.stringify(putTodo))
        console.log(this.state.getIndex)
        this.props.history.push({
            pathname:'/inbox'
        })
    }
    render(){
        
        return(
            <>
            <div className='editHead'>
                  <form>
                     <div className='newTodoContainer'>
                     <BiArrowBack onClick={this.toInbox} className='iconBack'></BiArrowBack>
                      <h1 style={{color:'white'}} className='Topic'>Edit Todo </h1>
                      <div className='inputContainer'>   
                      <input autoFocus type='text' value={this.state.todoTopic} onChange={this.changeTodoTopic} placeholder='My todo topic' className='todoTopic' />
                      <input type='text' value={this.state.todoInfo} onChange={this.changeTodoInfo} placeholder='About my todo...' className='aboutTodo' />
                      
                  <div className='dateContainer'> 
                     <label className='timeLabel' >Time:</label>  <input type='time' value={this.state.todoTime} onChange={this.changeTodoTime} className='time'/>
                     <label className='dateLabel'>Date:</label>  <input type='date' value={this.state.todoDate} onChange={this.changeTodoDate} className='date' /> </div></div> 
                      <button onClick={this.AddTodo} className='add'>Edit Todo</button>
                     </div>
                  </form>
            </div>
            </>
        )

    }
}

export default editTodo