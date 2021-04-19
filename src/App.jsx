import React, { useState } from 'react'
import ToDoList from './ToDoList'

const App = () => {
    const [inputItem, setInputItem] = useState()
    const [item, setItem] = useState([])
    const inputEvent = (event) => {
        setInputItem(event.target.value)
    }

    const addItem = () => {
        setItem((oldItem) => {
            return ([...oldItem, inputItem])
        })
        setInputItem('')
    }
    const deleteItem=(id)=>{
        console.log('delete');
        setItem((oldItem)=>{
            return oldItem.filter((arrElem,index)=>{
                 return index!==id;
            })
        })
    }
    return (
        <>
            <div className="div__style">
                <div className="todo__style">
                    <br />
                    <h1>ToDoList</h1>
                    <br />
                    <input type="text" placeholder="Add a Item" onChange={inputEvent} value={inputItem} />
                    <button onClick={addItem}>+</button>
                    <ol>
                        {
                            item.map((itemvalue,index) => {
                               return <ToDoList  key={index} id={index} text={itemvalue} onSelect={deleteItem} />
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;