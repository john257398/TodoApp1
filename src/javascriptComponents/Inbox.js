import React, {Component} from 'react'
import editTodo from './editTodo'
import '../cssFilesandImages/inbox.css'
import {FaEdit, FaRegMinusSquare} from 'react-icons/fa'
import {MdDeleteForever} from 'react-icons/md'
import {VscPreview} from 'react-icons/vsc'
import { FaCheck,FaTimes } from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'

 class Inbox extends Component{
    constructor(props){
    super(props)
    
    this.state={
        border:'0px',
        Icon:FiMenu,
        max:'0px',
        getIndex:'',
        edit:'none',
        color:'',
        items:[],
        hadTodo:false,
        style:'none',
        mark:'none',
        noTodoAdded:'none',
        removeTodo:false,
        putTodo:'',
        showingDate:new Date().toLocaleString('en-us',{month:'long',day:'numeric', year:'numeric',}),
        showingTime:new Date().toLocaleTimeString('en-US')
    }
    this.showAddTodo=this.showAddTodo.bind(this)   
    this.deleteIt=this.deleteIt.bind(this)
    this.changeTodoTopic=this.changeTodoTopic.bind(this)
    this.changeTodoInfo=this.changeTodoInfo.bind(this)
    this.changeTodoTime=this.changeTodoTime.bind(this)
    this.changeTodoDate=this.changeTodoDate.bind(this)
    this.goMenu=this.goMenu.bind(this)
    this.logOut=this.logOut.bind(this)
    }
    logOut(){
        this.props.history.push({
            pathname:'/'
        })
    }
    goMenu(){
        if(this.state.Icon===FiMenu){
        this.setState({
            max:'50px',
            Icon:FaTimes,
            border:'1px solid black'
        })
    }
    if(this.state.Icon===FaTimes){
        this.setState({
            max:'0px',
            Icon:FiMenu,
            border:'0px'
        })
    }
    }
    changeTodoTopic(event){
        this.setState({
            todoTopic:event.target.value,
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
   
   async checkedIt(keyer){
       var putTodo=  JSON.parse(localStorage.getItem('todo'))
       for(var x of putTodo){
           if(x[3]===keyer && x[4]==='them'){
            x[4]='release'
            x[7]='nextCheck'
           }
          else if(x[3]===keyer && x[4]==='release'){
               x[4]='them'
           }
           
       }

       await localStorage.setItem('todo',JSON.stringify(putTodo))
       this.props.history.push({
           pathname:'/inbox'
       })
    }
    
   async deleteIt(keyer){
    
        var putTodo=JSON.parse(localStorage.getItem('todo'))
        for(var x of putTodo){
            if(x[3]===keyer && x[5]==='they'){
                x[5]='dele'        
                await localStorage.setItem('todo',JSON.stringify(putTodo))
                putTodo.splice(putTodo.indexOf(x),1)
            }
        }
        await localStorage.setItem('todo',JSON.stringify(putTodo))
        this.props.history.push({
            pathname:'/inbox'
        })
       }
 async editIt(keyer){
        var putTodo=JSON.parse(localStorage.getItem('todo'))
        for(var x of putTodo){
            if(x[3]===keyer){
              var newLocal=[[
                  x[0],
                  x[1],
                  x[2],
                  x[6],
                  this.state.getIndex
              ]]
            }
        }
        var editedTodo=JSON.parse(localStorage.getItem('edited'))
         for(var x of putTodo){
             if(newLocal[0][1]===x[1]){
                 newLocal[0][4]=putTodo.indexOf(x)
                 await localStorage.setItem('edited',JSON.stringify(newLocal))
                 console.log(newLocal[0][4])
             }
         }
         
        this.props.history.push({
            pathname:'/edittodo'
        })
    }
   async previewIt(keyer){
        var putTodo=JSON.parse(localStorage.getItem('todo'))
        for(var x of putTodo){
            if(x[3]===keyer){
              var newLocal=[[
                  x[0],
                  x[1],
                  x[2],
                  x[6]
              ]]
                await localStorage.setItem('edition',JSON.stringify(newLocal))
            }
        }
        this.props.history.push({
            pathname:'/preview'
        })
    }
    showAddTodo(){
        this.props.history.push({
            pathname:'/addedtodo'
        })
    }
   
    

    render()
        {
            const putTodo=  JSON.parse(localStorage.getItem('todo'))
        if(putTodo){                 
       var listItems=putTodo.map((value,index)=>{    
       return(         
       <div className='map' id={value[5]} key={index}>   
       <div className='checkAlign'><div className='check' id={value[4]} keyer={value[3]} key={index} onClick={() => this.checkedIt(value[3])}></div>  
       <FaCheck className='checked' id={value[7]} keyer={value[3]} key={index}></FaCheck></div>
       <div className='headAlign'><p className='theHead'>{value[0]}</p></div>
       <div className='bodyAlign'><p className='theBody'>{value[1]}</p></div>
      <div className='iconAlign'> <MdDeleteForever className='del' key={index} keyer={value[3]} onClick={() => this.deleteIt(value[3])}>delete</MdDeleteForever>
       <FaEdit className='edit' key={index} keyer={value[3]} onClick={() => this.editIt(value[3])}>edit</FaEdit>
       <VscPreview className='preview' key={index} keyer={value[3]} onClick={() =>this.previewIt(value[3])}>preview</VscPreview></div>
       <div className='timeAlign'><p className='timeMap'>{value[2]}</p></div>
        <editTodo keyTopic={value[0]} keyInfo={value[1]} keyTime={value[2]} keyDate={value[6]} />
         </div>
      )
       }
        )
}
         return(   
            <>  
            <div className='all'>
             <div className='containsImage'>
                <div className='menuDiv'>
                 <this.state.Icon className='menu' onClick={this.goMenu} />
                 <div className='logOut' style={{maxWidth:this.state.max,borderRight:this.state.border}} onClick={this.logOut}>Log Out</div></div>
                 <div className='imageText'>Your<br/> Todos </div>
                 <div className='imageshowDate'>{this.state.showingDate}</div>
                 <div className='imageshowTime'>{this.state.showingTime}</div>
             </div>                                                                   
              <div className='coversAll'>
                  <div className='theInbox'><h2>INBOX</h2></div>
                  <div className='noTodo' style={{display:this.state.noTodoAdded}}>No Todo Added Yet</div>
                  <div className='todoContent'>{listItems}</div>
                  <button className='addNew' onClick={this.showAddTodo}><div className='text'>+</div></button>     
              </div>
              </div>
            </>
        )
     }
}

export default Inbox