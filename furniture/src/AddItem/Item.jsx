import React, {Component} from 'react';
import './Item.css'

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: '',
            state: '',
            description: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this)
        this.writeNote = this.writeNote.bind(this)
    }

    //when user input changes, set the value of the state variable
    //to what ever is in the user input box
    handleUserInput(e) {
        console.log(e)
        const name = e.target.name;
        this.setState({
            [name]: e.target.value, //what the user inputs
        })
    }

    writeNote(e) {
        /*console.log(this.state.newNoteContent)*/
        this.props.addNote(this.state)

        /*console.log(this)*/
        this.setState({
            name: '',
            city: '',
            state: '',
            description: ''
        })
        /*console.log(this.state)*/
    }

    render() {
        return (<div className="team-square">
            <div className="form">
                <div className="addTitle">Add new Manufacturer:</div>
                <div className="form-group">
                    <input name="name" className="form-control" placeholder="Manufacturer Name" value={this.state.name} onChange={this.handleUserInput}/>
                    <input name="city" className="form-control" placeholder="City" value={this.state.city} onChange={this.handleUserInput}/>
                    <input name="state" className="form-control" placeholder="Province or State" value={this.state.state} onChange={this.handleUserInput}/>
                    <input name="description" className="form-control" placeholder="Description" value={this.state.description} onChange={this.handleUserInput}/>
                    <button className="noteButton" onClick={this.writeNote}>
                        Add Manufacturer</button>
                </div>
            </div>

        </div>)
    }
}

export default NoteForm
