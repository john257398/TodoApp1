import React, { Component } from 'react'
import './myStyles.css'

class Calculator extends Component{
    constructor(props) {
        super(props)
        this.state={
            value: '',
            equal:''
        }
        this.calChange=this.calChange.bind(this)
        this.calEqual=this.calEqual.bind(this)
        this.calClear=this.calClear.bind(this)
    }

     calChange(event){
         this.setState({
             value:this.state.value+event.target.value
         })
     }
   
     calEqual(event){
         this.setState({
             equal:eval(this.state.value)
         })
         
     }
     calClear(){
         this.setState({
            value:'',equal:''
         })
     }
render(){

    return(
        <div>
            <form name='calculator' >
                <table className='First'>
                    <tr>
                        <td colspan='4'><input type='text' className='kill' value={this.state.equal} onChange={this.calEqual} disabled></input></td>
                    </tr>
                    <tr>
                        <td colspan='4'><input type='text' className='kill' value={this.state.value} onChange={this.calChange} name='doctor' disabled></input></td>
                    </tr>
                    <tr>
                        <td><input type='button' value='1' className='under' onClick={this.calChange}></input></td>
                        <td><input type='button' value='2' className='under' onClick={this.calChange}></input></td>
                        <td><input type='button' value='3' className='under' onClick={this.calChange}></input></td>
                        <td><input type='button' value='+' className='under' onClick={this.calChange}></input></td>
                    </tr>
                    <tr>
                        <td><input type='button' value='4' className='under' onClick={this.calChange}></input></td>
                        <td><input type='button' value='5' className='under' onClick={this.calChange}></input></td>
                        <td><input type='button' value='6' className='under' onClick={this.calChange}></input></td>
                        <td><input type='button' value='-' className='under' onClick={this.calChange}></input></td>
                    </tr>
                    <tr>
                        <td><input type='button' value='7' className='under' onClick={this.calChange}></input></td>
                        <td><input type='button' value='8' className='under' onClick={this.calChange}></input></td>
                        <td><input type='button' value='9' className='under' onClick={this.calChange}></input></td>
                        <td><input type='button' value='*' className='under' onClick={this.calChange}></input></td>
                    </tr>
                    <tr>
                        <td><input type='button' value='0' className='under' onClick={this.calChange}></input></td>
                        <td><input type='button' value='.' className='under' onClick={this.calChange}></input></td>
                        <td><input type='button' value='C' className='under' onClick={this.calClear}></input></td>
                        <td><input type='button' value='=' className='under' onClick={this.calEqual}></input></td>
                    </tr>
                </table>
            </form>
          </div>
    )
}
}

export default Calculator