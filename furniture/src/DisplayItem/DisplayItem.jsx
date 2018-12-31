import React, {Component} from 'react';
import './DisplayItem.css'

class DisplayItem extends Component {

    constructor(props) {
        super(props);
        this.content = props.noteContent;
        console.log(this.content)
        /*this.handleUserInput = this.handleUserInput.bind(this)
        this.addEntity = this.addEntity.bind(this)*/
    }

    render(props) {
        return (<div className="team-square">
            <div className="form">
                <div className="form-group">
                    <div><b>Name: </b><span>{this.content[0]}</span></div>
                    <div><b>Location: </b><span>{this.content[1]}, {this.content[2]}</span></div>
                    <div><b>Description: </b><span>{this.content[3]}</span></div>
                </div>
            </div>
        </div>)
    }
}

export default DisplayItem
