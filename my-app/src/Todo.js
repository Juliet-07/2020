import React, {Component} from 'react'
// import './Todo.css'
import Todoitems from './Todoitems'

class MyTodo extends Component{
    state = {
        todoItems: [],
        newTodo:''
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState(prevState =>{
            if (prevState.todoItems.includes(prevState.newTodo)){}
            else
            return{
                todoItems: prevState.todoItems.concat(this.state.newTodo),
                newTodo:''
            }
        })
    }
    handleChange = (e) =>{
        this.setState({newTodo: e.target.value})
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.todoItems.length !==
            this.state.todoItems.length){
                const jsonState=
                JSON.stringify(this.state.todoItems)
                localStorage.setItem('todoItems', jsonState)
            }
    }
    componentDidMount(){
        const itemsFromLocalStorage = 
        localStorage.getItem('todoItems')
        const todoItemsFromLocalStorage =
        JSON.parse(itemsFromLocalStorage)
        
        if (todoItemsFromLocalStorage){
            this.setState(()=>({
                todoItems:todoItemsFromLocalStorage
            }))
        }
    }
    handleRemoveOneItem = (individualItems)=>{
        this.setState((prevState)=>{
            return{
                todoItems:prevState.todoItems.filter(item=>
                    item!==individualItems)
            }
        })
    }
    handleRemoveAllItem = (todoItems)=>{
        this.setState(()=>{
            return{
                todoItems:[]
            }
        })
    }
    render(){
        return(
            <div>
                <h1>WELCOME TO MY TODO APP</h1>
                <fieldset>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Todo Items</label>
                    <input type='text' value={this.state.newTodo} onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
                </fieldset>
                    <button onClick={this.handleRemoveAllItem}>Remove All</button>
                {
                    this.state.todoItems.map(item =>
                    <Todoitems individualItems ={item}
                    handleRemoveOneItem={this.handleRemoveOneItem}/>)
                }
            </div>
        )
    }
}
export default MyTodo