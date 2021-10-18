import React, {Component} from 'react'
import Nav from './Header'
import Middle from './Body'
import './General.css'

class Front extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <Middle/>
            </div>
        )
    }
}
export default Front