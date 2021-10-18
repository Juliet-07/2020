import React, {Component} from 'react';
import './MyTodo.css'

class MyTodoApp extends Component{
    render(){
        return(
            <div>
                <div class='row'>
                    <form class='col s12'>
                        <div class='row'>
                            <div class='input-field col s6'>
                                <i class='material-icons prefix'>mode_edit</i>
                                <textarea id='icon_prefix2' class='materialize-text-area'></textarea>
                                <label for='icon_prefix2'>Enter Task</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default MyTodoApp