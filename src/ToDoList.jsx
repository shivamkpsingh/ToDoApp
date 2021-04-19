import React from 'react'

const ToDoList = (props) => {
    
    return (
        <>
            <div className="list__style">
                <i className="far fa-trash-alt" onClick={()=>{
                    props.onSelect(props.id);
                }}></i>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default ToDoList;