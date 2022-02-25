import React from 'react'

const UserInput = () =>{
    return <div>
                <input type="text" className="item userInput" />
                    <input type="text" className="item" value="item1" />
                    <input type="text" className="item" value="item2" />
                    <input type="text" className="item" value="item3" />
                    <input  type="text" className="item itemsLeft" value="3 items left"/>
            </div> 
}

export default UserInput