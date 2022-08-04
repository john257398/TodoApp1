import React from 'react'

function FuctionClick(){
    function clickHandler(){
        console.log('Button clicked')
    }
    return(
        <div>
          <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FuctionClick