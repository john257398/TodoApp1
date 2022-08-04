import React from 'react'

const Hello =() =>{
  //  return(
    //    <div>
      //      <h1>Hello John</h1>
       // </div>
    //)
    return React.createElement('div',null,React.createElement('h1',null,'Hello John'))
}

export default Hello