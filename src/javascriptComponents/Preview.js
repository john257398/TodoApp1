import React, {Component} from 'react'
import '../cssFilesandImages/preview.css'


class Preview extends Component{
    constructor(props){
        super(props)
        var editedTodo=JSON.parse(localStorage.getItem('edition'))
        this.state={
            previewTopic:editedTodo[0][0],
            previewInfo:editedTodo[0][1],
            previewTime:editedTodo[0][2],
            previewDate:editedTodo[0][3]
        }
        this.goBack=this.goBack.bind(this)
    }

    goBack(){
        this.props.history.push({
            pathname:'/inbox'
        })
    }

    render(){
        return(
            <>
            <div className='theGreatest'>
              <div className='head'>Todo Preview</div>
              <div className='nextGreatest'>
                  <div className='topParent'>
                  <p className='top'>Topic:     {this.state.previewTopic}</p>
                  <p className='inf'>Info:     {this.state.previewInfo}</p>
                  <p className='tim'>Time:     {this.state.previewTime}</p>
                  <p className='dat'>Date:     {this.state.previewDate}</p>
                  </div>
                  <button className='but' onClick={this.goBack}>Done</button>
              </div>
              </div>
            </>
        )
    }
}

export default Preview