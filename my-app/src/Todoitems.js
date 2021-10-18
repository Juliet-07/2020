import React from 'react'

const Todoitems = (props) => (
    <div>
        {props.individualItems}
        <button onClick={()=> props.handleRemoveOneItem(props.individualItems)}>Remove</button>
    </div>
)
export default Todoitems