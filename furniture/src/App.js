import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { DB_CONFIG } from './Config/Config.js';
import firebase from 'firebase/app';
import 'firebase/database'

import Item from './AddItem/Item'
import DisplayItem from './DisplayItem/DisplayItem'

/*
import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';*/

class App extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('notes');

    // We're going to setup the React state of our component
    this.state = {
      notes: [],
    }
  }

  componentWillMount(){
    const previousNotes = this.state.notes;

    // DataSnapshot
    this.database.on('child_added', snap => {
        console.log(snap.val())
      previousNotes.push({
        id: snap.key,
        noteContent: [
            snap.val().name,
            snap.val().city,
            snap.val().state,
            snap.val().description
        ]
      })

      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote(note){
    this.database.push(note);
  }

  removeNote(noteId){
    console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
  }

  render() {
    return (
        <div>
            <div className="grid-container-3">
                <div className="notesFooter">
                  <Item addNote={this.addNote} />
                </div>
            </div>
            <div className="grid-container-3">
              {
                this.state.notes.map((note) => {
                  return (
                    <DisplayItem noteContent={note.noteContent}
                    noteId={note.id}
                    key={note.id}/>
                  )
                })
              }
             </div>
        </div>
    );
  }
}

export default App;
