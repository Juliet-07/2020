import React, {Component} from 'react'

class Likes extends Component{
    state = {
        likes:0
    }
    // TO INCREASE LIKES
    // increaseLikes = ()=>{
    //         this.setState((prevState, PrevProps)=>{
    //             return{
    //                 likes:prevState.likes + 1
    //             }
    //         })
    //     }
    
    // TO INCREASE LIKES AND MAKE IT STOP AT 5(USING IF, ELSE)
    // increaseLikes = ()=>(
    //     this.setState((PrevState, PrevProps)=>{
    //         if(PrevState.likes < 5){
    //             return PrevState.likes + 1
    //         }
    //         else{
    //            PrevState.likes = 5 
    //         }
    //     })
    // )

    // TO INCREASE LIKES AND MAKE IT STOP AT 5(USING TENARY)
    increaseLikes = ()=>{
        this.setState((PrevState, PrevProps)=>{
            return{
                likes:PrevState.likes < 5 ? PrevState.likes + 1 : PrevState.likes = 5
            }
        })
    }
   
    // TO DECREASE LIKES AND NOT GO BEYOND 0 (USING IF, ELSE)
    // decreaseLikes = () =>(
    //     this.setState((PrevState, PrevProps)=>{
    //         if (PrevState.likes > 0){
    //             return PrevState.likes - 1
    //         }
    //         else{
    //             PrevState.likes = 0
    //         }
    //     })
    // )

    // TO DECREASE LIKES AND NOT GO BEYOND 0 (USING TENARY)
    decreaseLikes = () =>{
        this.setState((PrevState,PrevProps)=>{
            return{
                likes:PrevState.likes > 0 ? PrevState.likes - 1 : PrevState.likes = 0
            }
        })
    }

    // TO RESET TO 0
    reset = () =>{
        this.setState((PrevState, PrevProps)=>{
            return{
                likes:PrevState.likes = 0
            }
        })
    }
render(){
    return(
        <div>
            <h1>MY LIKES APP</h1>
            <p>Likes:{this.state.likes}</p>
            <button onClick={this.increaseLikes}>Like</button>
            <button onClick={this.decreaseLikes}>Unlike</button>
            <button onClick={this.reset}>Reset</button>
        </div>
    )
}
}
export default Likes